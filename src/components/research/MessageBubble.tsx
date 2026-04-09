import { memo } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/hooks/useResearchAssistant";

interface Props {
  message: Message;
  compact?: boolean;
}

const MessageBubble = memo(({ message, compact = false }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`${compact ? "max-w-[92%] sm:max-w-[85%]" : "max-w-[95%] sm:max-w-[75%]"} rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted text-foreground rounded-bl-md"
        }`}
      >
        {isUser ? (
          <p className="leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert [&_p]:my-1.5 [&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_h3]:text-[13px] [&_h3]:sm:text-sm [&_h3]:font-bold [&_h3]:mt-3 [&_h3]:mb-1 [&_table]:text-[11px] [&_table]:sm:text-xs [&_td]:px-2 [&_td]:py-1 [&_th]:px-2 [&_th]:py-1 [&_strong]:text-foreground">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
        {message.citations && message.citations.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-border/40 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
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
                  className="flex items-center gap-1.5 text-[11px] text-primary hover:underline truncate"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span className="truncate">{hostname}</span>
                </a>
              );
            })}
            <p className="text-[9px] text-muted-foreground/50 mt-1.5 italic">Powered by Perplexity</p>
          </div>
        )}
      </div>

      {/* Quote CTA after assistant messages */}
      {!isUser && (
        <Link
          to="/contact"
          className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-ohio-red-light transition-colors group"
        >
          Get a custom quote
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
});

MessageBubble.displayName = "MessageBubble";

export default MessageBubble;
