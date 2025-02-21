import Link from 'next/link';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full px-auto py-20 lg:py-28 xl:py-32 flex flex-col items-center gap-4 text-center"
    >
      <article className="flex items-end gap-5 text-lg">
        <span className="roboto-mono text-green font-medium">04.</span>
        <h3 className="text-green font-semibold">What&apos;s Next?</h3>
      </article>

      <h3 className="text-lightest-slate font-bold text-3xl sm:text-4xl xl:text-5xl">
        Get In Touch
      </h3>

      <p className="text-slate text-lg w-full max-w-[600px] mb-10">
        I&apos;m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>

      <Link
        href="mailto:lukmanrambe1945@gmail.com"
        className="w-fit px-9 py-3.5 font-medium text-green border border-green rounded-md hover:bg-green hover:text-navy focus-visible:bg-green focus-visible:text-navy transition-colors ease-in-out duration-200"
      >
        Say Hello!
      </Link>
    </section>
  );
};

export default Contact;
