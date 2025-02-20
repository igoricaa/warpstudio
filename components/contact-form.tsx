'use client';

import { contactFormAction } from '@/lib/actions';
import { recaptchaSiteKey } from '@/sanity/env';
import Script from 'next/script';
import { useActionState, useState } from 'react';

declare const grecaptcha: any;

const inputClasses =
  'group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive bg-transparent border-b border-foreground pb-2 px-1 outline-none';

export function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState('');
  const [state, formAction, pending] = useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recaptcha_token: '',
    },
    success: false,
    errors: null,
  });

  return (
    <>
      <form action={formAction}>
        <div className='flex flex-col gap-6'>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.name}
          >
            <input
              id='name'
              name='name'
              placeholder='Name'
              className={inputClasses}
              aria-invalid={!!state.errors?.name}
              aria-errormessage='error-name'
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id='error-name' className='text-destructive text-sm'>
                {state.errors.name}
              </p>
            )}
          </div>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.email}
          >
            <input
              id='email'
              name='email'
              placeholder='Email'
              className={inputClasses}
              aria-invalid={!!state.errors?.email}
              aria-errormessage='error-email'
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id='error-email' className='text-destructive text-sm'>
                {state.errors.email}
              </p>
            )}
          </div>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.message}
          >
            <textarea
              id='message'
              name='message'
              placeholder='Type your message here...'
              rows={5}
              className={`resize-none ${inputClasses}`}
              aria-invalid={!!state.errors?.message}
              aria-errormessage='error-message'
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <p id='error-message' className='text-destructive text-sm'>
                {state.errors.message}
              </p>
            )}
          </div>

          <input
            type='hidden'
            id='recaptcha_token'
            name='recaptcha_token'
            value={captchaToken}
          />
        </div>
        <div className='flex items-center gap-14 mt-10'>
          <button
            type='submit'
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-12 rounded-md px-6'
            disabled={pending}
          >
            {pending ? 'Sending...' : 'Send Message'}
          </button>
          {state.success ? (
            <p className='text-muted-foreground flex items-center gap-2'>
              Your message has been sent. Thank you.
            </p>
          ) : null}
          {state.errors &&
            (state.errors.recaptcha_token || state.errors.custom) && (
              <p className='text-destructive flex items-center gap-2'>
                {state.errors.custom ||
                  'Something went wrong, please try again.'}
              </p>
            )}
        </div>
      </form>
      <Script
        id='recaptcha-load'
        strategy='beforeInteractive'
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        onLoad={() => {
          grecaptcha.ready(function () {
            grecaptcha
              .execute(recaptchaSiteKey, {
                action: 'contact',
              })
              .then(function (token: string) {
                setCaptchaToken(token);
              });
          });
        }}
      />
    </>
  );
}
