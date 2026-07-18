import * as React from "react";
import { cn } from "@/lib/utils";

function AuthCard({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  );
}

function AuthCardHeader({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}

function AuthCardContent({ className, ...props }) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

function AuthCardFooter({ className, ...props }) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

function AuthCardTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-2xl font-semibold", className)}
      {...props}
    />
  );
}

function AuthCardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  AuthCard,
  AuthCardHeader,
  AuthCardContent,
  AuthCardFooter,
  AuthCardTitle,
  AuthCardDescription,
};