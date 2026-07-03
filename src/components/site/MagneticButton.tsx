import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  strength = 0.35,
  ...props
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  const tx = useTransform(sx, (v) => v * strength);
  const ty = useTransform(sy, (v) => v * strength);

  const styles: Record<string, string> = {
    primary:
      "bg-black text-white hover:bg-black/90 border border-black",
    secondary:
      "bg-white text-black hover:bg-secondary border border-hairline",
    ghost: "bg-transparent text-black hover:bg-secondary border border-transparent",
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: tx, y: ty }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set(e.clientX - (r.left + r.width / 2));
        y.set(e.clientY - (r.top + r.height / 2));
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-colors sm:px-7 sm:text-[15px]",
        styles[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}