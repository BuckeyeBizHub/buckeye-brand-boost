import { ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/hooks/useResearchAssistant";

interface Props {
  message: Message;
  compact?: boolean;
}

const MessageBubble = ({ message, compact = false }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`${compact ? "max-w-[85%]" : "max-w-[75%]"} rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted text-foreground rounded-bl-md"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert [&_p]:my-1.5 [&_ul]:my-1.5 [&_li]:my-0.5 [&_h3]:text-sm [&_h3]:font-bold [&_h3]:mt-3 [&_h3]:mb-1 [&_table]:text-xs">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
        {message.citations && message.citations.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-border/40 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
              Sources
            </p>
            {message.citations.slice(0, 5).map((url, ci) => {
              let hostname = url;
              try { hostname = new URL(url).hostname.replace("www.", ""); } catch {}
              return (
                <a
                  key={ci}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span className="truncate">{hostname}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
