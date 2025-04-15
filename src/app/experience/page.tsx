"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { DockNav } from "@/components/DockNav";

export default function experience() {
  const data = [
    {
      title: "DePaul University",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            At DePaul University, pursuing my MA in Animation, I’ve expanded my
            creative skills and professional network through hands-on roles and
            active campus involvement. My background in design, animation, and
            VR has allowed me to blend creativity, leadership, and collaboration
            across various positions.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            At the{" "}
            <strong>
              {" "}
              Jarvis Student Center for Innovation and Collaboration,
            </strong>{" "}
            I’ve gained valuable experience in operations, event management, and
            creative resource support. This role has helped me connect with
            professors and industry professionals, expanding my network and
            providing insights into cutting-edge projects.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As a{" "}
            <strong>
              Student Assistant in Jarvis Student Center for Innovation Centre,
            </strong>{" "}
            I’ve built strong relationships with faculty and mentors, opening
            doors to collaboration and industry opportunities. I also serve as
            an <strong>Event Manager for SIGGRAPH DePaul,</strong> organizing
            gaming and animation events that bridge the gap between students and
            experts.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In my role as a{" "}
            <strong>Research Assistant under Professor Allen Turner, </strong>I
            assist with projects that explore animation, technology, and
            interactive media. This has deepened my understanding of research
            methodologies and the application of theory to real-world creative
            projects, enhancing my critical thinking and problem-solving skills.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A highlight of my time at DePaul has been the{" "}
            <strong>Wellnut project, </strong> a gamified wellness mobile app
            that earned us a finalist spot in the Jarvis Innovation Challenge.
            This experience allowed me to apply my technical and creative skills
            to a real-world challenge, strengthening my connections with
            faculty, mentors, and industry leaders. All these experiences at
            DePaul have not only leveraged my industry background but also
            opened doors to new collaborations and growth opportunities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/Sankofa2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/Sankofa1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/Sankofa3.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/Sankofa4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/wellNut1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/wellNut2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Industry experience",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            After graduating with my degree in Animation and Special Effects
            from Karnavati University, my first professional step was working as
            a Visual Designer. That role became a crucial foundation for me,
            it’s where I truly developed my eye for detail and learned the
            importance of design principles, layout, and typography. I spent
            that time mastering 2D tools like Photoshop, Illustrator, and
            InDesign, which not only sharpened my technical skills but also
            taught me how to communicate visually in a clean, effective way.
            Even now, that design sense continues to support my work, whether
            I’m crafting UI elements for a game, building immersive
            environments, or refining textures in 3D.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            From there, I moved into the game industry as a Game Designer at
            PixcellPlay Pvt. Ltd., contributing to titles like Desi Dress Up,
            Poke of words, BunnyGo and Super Stylist Dress Up. I was involved in
            gameplay documentation, level balancing, and weekly design
            iterations. It was a fast-paced environment where I quickly learned
            how to design around user behavior and feedback, and how to keep
            content fresh and challenging in a live product cycle through game
            analysis.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Later, I worked with a Boston-based client, GoingClear as a Part of
            Iqtechmax, on a metaverse project where I led the creation of VR
            environments using Unreal Engine. This was a major step forward for
            me, I was responsible for modeling, texturing, integrating assets
            into VR, and managing the development workflow. It gave me the
            chance to apply both my artistic and technical knowledge in a very
            hands-on way, while also developing a strong sense of project
            management and team coordination across time zones.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Outside of professional projects, I’ve continued to stay deeply
            engaged with the industry. I’ve attended events like IGDC to connect
            with professionals and stay current with trends. As a Women in Games
            Ambassador, I’ve also been attending panels and mentoring events,
            especially about helping women transition into careers in game
            development.
            <br />
            These years after undergrad have helped me grow into a
            multidisciplinary designer, someone who can combine solid design
            principles with immersive storytelling and technical execution. Now,
            at DePaul University, I’m continuing to build on that journey,
            refining my skills, collaborating with new teams, and constantly
            pushing my work to the next level.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/ie1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ie2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ie3.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ie4.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023 – karnavati university",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During my time at Karnavati University, I pursued a Bachelors degree
            in Animation and Special Effects, which really helped me discover my
            passion for 3D art, rigging, and immersive design. I spent those
            years building a strong foundation in 3D modeling, animation, and
            storytelling, and I found myself drawn to visual aesthetics and how
            to bring stories to life through design.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I was always eager to get involved in team projects and often found
            myself taking on responsibilities that pushed me to think creatively
            and problem-solve. I also started exploring VR early on and enjoyed
            figuring out ways to combine new tech with creative ideas.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Outside of coursework, I attended events like the India Game
            Developer Conference (IGDC), where I got to connect with
            professionals and learn more about what’s happening in the industry.
            I also became a Women in Games Ambassador, which gave me the
            opportunity to support and advocate for more diversity and inclusion
            in the gaming space. Through that role and other speaking
            opportunities, I’ve talked about career changes into the gaming
            industry—especially for women looking to get started.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            While in college, I also focused a lot on networking. I built
            connections on LinkedIn with people in the gaming and animation
            industry.
            <br />
            Overall, my time at Karnavati shaped a lot of who I am today. It
            gave me a strong technical base, encouraged my creative thinking,
            and opened doors that led me to pursue my graduate studies in
            animation at DePaul University.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/ku.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/k1.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/k2.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/k3.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full pb-20">
      <div className="pt-20 w-full">
        <Timeline data={data} />
      </div>
      <DockNav />
    </div>
  );
}
