import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a> */}
      <h1 className="mb-8 text-2xl font-medium">CS Graduate</h1>
      <div className="prose prose-neutral dark:prose-invert">

        <p>
           I'm passionate about building systems that perform under pressure and scale smoothly. From backend architectures to ML models, I love diving deep to solve problems and contribute to creating efficient, reliable solutions. Mostly stack agnostic as I focus on getting things done with whatever works best. 
        </p>
        <p>
         My focus is on scalable backend systems, whether that's creating high-performance APIs, optimizing data pipelines, or developing systems that keep running seamlessly. I'm also excited to explore how Machine learning can be used to automate tasks and improve system efficiency.
 {""}
        </p>
        <p>
          I'm eager to contribute, learn, and grow as I work on projects that challenge me and push my skills forward.
        </p>

      </div>
    </section>
  );
}