'use server';

import { FormFields } from '@/utils/types';

function validateForm(data: FormFields) {
  const errors: Partial<Record<keyof FormFields, string>> = {};

  if (!data.name || data.name.length < 2 || data.name.length > 50) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    errors.message = 'Message must be between 10 and 1000 characters';
  }

  return errors;
}

const verifyRecaptcha = async (token: string) => {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
    { method: 'POST' }
  );

  const recaptchaData = await recaptchaResponse.json();

  return recaptchaData.success;
};

export async function contactFormAction(
  prevState: any,
  formData: FormData
): Promise<{
  defaultValues: FormFields;
  success: boolean;
  errors: any;
}> {
  const data: FormFields = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    recaptcha_token: formData.get('recaptcha_token') as string,
  };

  const errors = validateForm(data);

  if (Object.keys(errors).length > 0) {
    return {
      defaultValues: data,
      success: false,
      errors,
    };
  }

  const recaptchaSuccess = await verifyRecaptcha(data.recaptcha_token);
  if (!recaptchaSuccess) {
    return {
      defaultValues: data,
      success: false,
      errors: { recaptcha_token: 'Invalid reCAPTCHA' },
    };
  }

  fetch(`${process.env.SITE_URL}/api/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      return res.json();
    })
    .then((result) => {
      if (!result.success) {
        return {
          defaultValues: data,
          success: false,
          errors: result.error,
        };
      }

      return {
        defaultValues: {
          name: '',
          email: '',
          message: '',
          recaptcha_token: data.recaptcha_token,
        },
        success: true,
        errors: null,
      };
    })
    .catch((error: any) => {
      return {
        defaultValues: data,
        success: false,
        errors: {
          custom: error.message,
        },
      };
    });

  return {
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recaptcha_token: data.recaptcha_token,
    },
    success: true,
    errors: null,
  };
}
