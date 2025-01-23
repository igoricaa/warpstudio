'use client';

import { useRef, useEffect } from 'react';

const AnimatedText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words: string[] = children.split(' ');

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target;
          const wordElements = container.querySelectorAll('.word-wrapper');

          const scrollProgress = Math.min(
            Math.max((entry.intersectionRatio - 0.05) / (1 - 0.05), 0),
            1
          );

          const scrolledPast =
            container.getBoundingClientRect().bottom < window.innerHeight / 2;

          wordElements.forEach((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            let wordProgress = Math.min(
              Math.max((scrollProgress - start) / (end - start), 0),
              1
            );

            if (scrolledPast) {
              wordProgress = 1;
            }

            const motionSpan = word.querySelector('.motion-word');
            if (motionSpan instanceof HTMLElement) {
              motionSpan.style.opacity = wordProgress.toString();
            }
          });
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: window.matchMedia('(max-width: 480px)')
          ? `300px 0px -${window.innerHeight * 0.4}px 0px`
          : '-30% 0px',
      }
    );

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [words.length]);

  return (
    <p
      ref={containerRef}
      className={`flex justify-center flex-wrap mx-auto max-w-7xl text-foreground ${className}`}
    >
      {words.map((word, index) => (
        <Word key={index}>{word}</Word>
      ))}
    </p>
  );
};

const Word = ({ children }: { children: string }) => {
  return (
    <span className='relative mr-2 mt-1 lg:mr-3 lg:mt-2 word-wrapper'>
      <span className='absolute opacity-20'>{children}</span>
      <span className='motion-word'>{children}</span>
    </span>
  );
};

export default AnimatedText;
