import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "@/components/ui/AppLink";

// Rendered on the server at build time, so the markdown libraries never ship to the browser.
export default function BlogMarkdown({ content, currentLang }) {
  return (
    <ReactMarkdown 
    rehypePlugins={[rehypeRaw]}
    components={{
      // Article images sit below the fold: don't compete with CSS/JS on first load
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      img: ({ node, ...props }) => <img loading="lazy" decoding="async" {...props} />,
      a: ({ node, className, ...props }) => {
        const href = props.href || "";
        let baseClass = className 
          ? className.replace(/text-\[#1b30a7\]/g, "text-blue-600").replace(/hover:text-\[#142380\]/g, "hover:text-blue-800")
          : "text-blue-600 hover:underline";
        if (!baseClass.includes("text-blue-600")) {
          baseClass = `${baseClass} text-blue-600`;
        }
        if (!baseClass.includes("hover:underline") && !baseClass.includes("underline")) {
          baseClass = `${baseClass} hover:underline`;
        }

        if (href.startsWith("#")) {
          return (
            <a href={href} className={baseClass} {...props} />
          );
        }

        if (href.startsWith("/")) {
          const localizeHref = (path) => {
            let normalized = path;
            if (!normalized.includes('#') && !normalized.includes('?') && !normalized.includes('.') && !normalized.endsWith('/')) {
              normalized += '/';
            }
            return currentLang === "en" ? normalized : `/${currentLang}${normalized}`;
          };
          return (
            <Link href={localizeHref(href)} className={baseClass} {...props} />
          );
        }
        return <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} {...props} />;
      }
    }}
  >
    {content}
  </ReactMarkdown>
  );
}
