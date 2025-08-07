import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface EmailCopyProps {
  email: string;
  showText?: boolean; // if false, render only the copy button
  className?: string;
}

const EmailCopy = ({ email, showText = true, className }: EmailCopyProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copié / Email copied");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Impossible de copier / Unable to copy");
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      {showText && (
        <a href={`mailto:${email}`} className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
          {email}
        </a>
      )}
      <Button
        variant="outline"
        size="icon"
        aria-label="Copier l'email / Copy email"
        onClick={onCopy}
        className="h-8 w-8"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </span>
  );
};

export default EmailCopy;
