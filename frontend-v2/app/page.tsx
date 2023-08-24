"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { title, subtitle, paragraph } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 theme-light">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Open eLearning&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          The open-source eLearning platform tailored to your needs.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <Card>
        <h2 className={subtitle({ class: "mt-4 ml-5 mr-4" })}>Features</h2>
        <CardBody>
          {[
            "Interactive Courses & Modules",
            "Personalized Learning Paths",
            "Quizzes & Assessments",
            "Progress Tracking & Analytics",
            "Collaboration & Discussion Forums",
            "File Sharing & Resources Library",
            "Certifications & Badges",
            "Mobile & Offline Access",
            "Customizable Branding",
            "Integrations & API Access",
          ].map((feature, index) => (
            <li key={index} className={paragraph({ class: "mt-4" })}>
              {feature}
            </li>
          ))}
        </CardBody>
      </Card>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
