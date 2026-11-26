import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "@/components/ui/AppLink";

// Rendered on the server at build time, so the markdown libraries never ship to the browser.
export default function TutorialMarkdown({ content, currentLang }) {
  return (
    <ReactMarkdown 
    rehypePlugins={[rehypeRaw]}
    components={{
      // Article images sit below the fold: don't compete with CSS/JS on first load
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      img: ({ node, ...props }) => <img loading="lazy" decoding="async" {...props} />,
      a: ({ node, ...props }) => {
        const href = props.href || "";
        if (href.startsWith("/")) {
          const localizeHref = (path) => {
            let normalized = path;
            if (!normalized.includes('#') && !normalized.includes('?') && !normalized.includes('.') && !normalized.endsWith('/')) {
              normalized += '/';
            }
            return currentLang === "en" ? normalized : `/${currentLang}${normalized}`;
          };
          return (
            <Link href={localizeHref(href)} {...props} />
          );
        }
        return <Link href={href} target="_blank" rel="noopener noreferrer" {...props} />;
      }
    }}
  >
    {content}
  </ReactMarkdown>
  );
}
