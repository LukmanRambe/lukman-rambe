import Link from 'next/link';

const Email = () => {
  return (
    <aside className="hidden sm:block sm:fixed sm:bottom-0 sm:right-12">
      <article className="flex flex-row sm:flex-col gap-5 after:hidden after:sm:block after:contents-[''] after:w-px after:h-[90px] after:bg-light-slate items-center">
        <Link
          href="mailto:lukmanrambe1945@gmail.com"
          className="text-sm text-light-slate hover:text-green focus-visible:text-green transition-colors duration-200 ease-in-out [writing-mode:vertical-lr]"
        >
          lukmanrambe1945@gmail.com
        </Link>
      </article>
    </aside>
  );
};

export default Email;
