import Link from "next/link";

// Reusable button. Internal paths use Next.js <Link>, full URLs open in a new tab.
export default function Button({ href, children, variant = "primary", Icon }) {
  const className = `btn btn-${variant}`;
  const content = (
    <>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      {children}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
