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
        className={`${compact ? "max-w-[92%] sm:max-w-[85%]" : "max-w-[95%] sm:max-w-[85%]"} rounded-2xl ${
          compact ? "px-3.5 sm:px-4 py-2.5 sm:py-3" : "px-5 sm:px-6 py-4 sm:py-5"
        } ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted/70 text-foreground rounded-bl-md border border-border/40"
        }`}
      >
        {isUser ? (
          <p className={`leading-relaxed ${compact ? "text-[13px] sm:text-sm" : "text-sm sm:text-base"}`}>{message.content}</p>
        ) : (
          <div
            className={`
              prose max-w-none dark:prose-invert
              ${compact ? "prose-sm" : "prose-base"}
              
              /* Headings */
              [&_h3]:font-display [&_h3]:font-bold [&_h3]:tracking-tight
              ${compact
                ? "[&_h3]:text-[13px] [&_h3]:sm:text-sm [&_h3]:mt-3 [&_h3]:mb-1.5"
                : "[&_h3]:text-base [&_h3]:sm:text-lg [&_h3]:mt-5 [&_h3]:mb-2"
              }
              [&_h3]:text-foreground [&_h3]:border-b [&_h3]:border-border/30 [&_h3]:pb-1
              
              /* Paragraphs */
              ${compact
                ? "[&_p]:my-1.5 [&_p]:text-[13px] [&_p]:sm:text-sm [&_p]:leading-relaxed"
                : "[&_p]:my-2.5 [&_p]:text-sm [&_p]:sm:text-[15px] [&_p]:leading-[1.75]"
              }
              
              /* Lists */
              ${compact
                ? "[&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_li]:text-[13px] [&_li]:sm:text-sm"
                : "[&_ul]:my-3 [&_ol]:my-3 [&_li]:my-1 [&_li]:text-sm [&_li]:sm:text-[15px]"
              }
              [&_ul]:pl-1 [&_ol]:pl-1
              [&_li]:leading-relaxed
              [&_ul>li]:list-none [&_ul>li]:relative [&_ul>li]:pl-5
              [&_ul>li]:before:content-['•'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-primary [&_ul>li]:before:font-bold
              
              /* Bold / strong */
              [&_strong]:text-foreground [&_strong]:font-bold
              
              /* Tables */
              [&_table]:text-[11px] [&_table]:sm:text-xs [&_td]:px-2 [&_td]:py-1.5 [&_th]:px-2 [&_th]:py-1.5 [&_th]:bg-muted [&_th]:font-bold
              [&_table]:border [&_table]:border-border/40 [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_td]:border-b [&_td]:border-border/20
              
              /* Code / inline */
              [&_code]:text-primary [&_code]:bg-primary/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[12px]
              
              /* Blockquote for pro tips */
              [&_blockquote]:border-l-3 [&_blockquote]:border-primary [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-lg
              ${compact
                ? "[&_blockquote]:px-3 [&_blockquote]:py-2 [&_blockquote]:my-2"
                : "[&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:my-3"
              }
              [&_blockquote_p]:my-0
            `}
          >
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}

        {/* Citations */}
        {message.citations && message.citations.length > 0 && (
          <div className={`${compact ? "mt-2.5 pt-2" : "mt-4 pt-3"} border-t border-border/30 space-y-1`}>
            <p className={`${compact ? "text-[10px]" : "text-[11px]"} font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5`}>
              Sources
            </p>
            <div className={`flex flex-wrap gap-1.5`}>
              {message.citations.slice(0, compact ? 3 : 6).map((url, ci) => {
                let hostname = url;
                try { hostname = new URL(url).hostname.replace("www.", ""); } catch {}
                return (
                  <a
                    key={ci}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 ${compact ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1"} rounded-full bg-primary/5 border border-primary/10 text-primary hover:bg-primary/10 hover:border-primary/20 transition-colors truncate max-w-[180px]`}
                  >
                    <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{hostname}</span>
                  </a>
                );
              })}
            </div>
            <p className={`${compact ? "text-[9px]" : "text-[10px]"} text-muted-foreground/50 mt-1.5 italic`}>Powered by Perplexity</p>
          </div>
        )}
      </div>

      {/* Quote CTA after assistant messages */}
      {!isUser && (
        <Link
          to="/contact"
          className={`mt-2 inline-flex items-center gap-1.5 ${compact ? "text-[11px]" : "text-xs"} font-bold text-primary hover:text-ohio-red-light transition-colors group`}
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
