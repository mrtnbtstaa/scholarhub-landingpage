import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-primary w-full flex items-center justify-center flex-col p-4">
      <span className="text-green-400 text-9xl mt-8">&rdquo;</span>
      <p className="lg:text-3xl md:2xl text-lg font-bold tracking-wide text-white text-center lg:w-225 w-auto">
        &quot;ScholarHub turned a stressful six-month search into an organized
        afternoon. I found three grants I never would have known about and
        secured $15,000 in funding for my Master&lsquo;s program.&quot;
      </p>
      <div className="flex items-center gap-2 mt-8 mb-8">
        <Image
          alt="profile Testimonials"
          src={"/assets/hero.png"}
          width={60}
          height={60}
          className="rounded-full aspect-square object-cover border-2 border-green-400"
        />
        <div>
            <h2 className="text-white text-md font-bold tracking-wide">Sarah Jenkins</h2>
            <h3 className="text-gray-300 tracking-wide">Graduate Student at Stanford</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
