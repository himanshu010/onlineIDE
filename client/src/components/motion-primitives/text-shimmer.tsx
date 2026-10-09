// Source: https://motion-primitives.com/c/text-shimmer.json (text-shimmer)
// Adapted: the site's colour tokens (the upstream dark default is 4.06:1 on our panels), plain text
// under reduced motion, and the motion element created once per tag instead of on every render.
'use client';
import React, { useMemo, type JSX } from 'react';
import { motion } from "framer-motion";
import { useReducedMotionSafe } from '@/lib/motion';
import { cn } from '@/lib/utils';

export type TextShimmerProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

const motionTags = new Map<React.ElementType, React.ElementType>();
const motionFor = (tag: React.ElementType) => {
  if (!motionTags.has(tag)) motionTags.set(tag, motion.create(tag as keyof JSX.IntrinsicElements));
  return motionTags.get(tag)!;
};

function TextShimmerComponent({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const reduce = useReducedMotionSafe();
  const MotionComponent = motionFor(Component);

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  if (reduce) return <Component className={cn('text-fg-muted', className)}>{children}</Component>;

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        'text-transparent [--base-color:var(--fg-muted)] [--base-gradient-color:var(--fg)]',
        '[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={
        {
          '--spread': `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

export const TextShimmer = React.memo(TextShimmerComponent);
