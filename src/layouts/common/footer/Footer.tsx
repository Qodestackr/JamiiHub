import { Link } from "react-router-dom";

import {
  Button,
  Input,
  // Accordion
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@core/components";

import { useWindowSize } from "@core/hooks";

import {
  GITHUB_LINK,
  PRIMARY_FOOTER_LINKS,
  DAO_FOOTER_LINKS,
  PRODUCTS_FOOTER_LINKS,
} from "@/data/links";

export default function Footer() {
  const { width } = useWindowSize();

  return (
    <footer className="w-[80vw] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*  */}
        <div aria-label="subscribe">
          <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 mb-4">
            <Input
              type="email"
              label="Subscribe for Community Updates"
              className="flex-grow w-full"
              placeholder="johndoe@gmail.com"
            />
            <Button
              variant="default"
              className="bg-primary text-white flex-grow w-full md:w-6/12"
            >
              Subscribe
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-4 justify-between items-center">
          {width <= 640 ? (
            <div className=" w-full flex flex-col justify-center items-center">
              <ul className="w-full">
                <li>
                  <Accordion type="multiple">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-semibold">
                        Helpful Links
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {PRIMARY_FOOTER_LINKS.map((link) => (
                            <li key={link.name}>
                              <Link to={link.link}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>{" "}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-semibold">
                        Product Links
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {PRODUCTS_FOOTER_LINKS.map((link) => (
                            <li key={link.name}>
                              <Link to={link.link}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>{" "}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-semibold">
                        Built For You
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {DAO_FOOTER_LINKS.map((link) => (
                            <li key={link.name}>
                              <Link to={link.link}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="flex flex-col">
                <h2>PRIMARY</h2>
                <ul>
                  {PRIMARY_FOOTER_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col">
                <h2>SERVICE</h2>
                <ul>
                  {DAO_FOOTER_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col">
                <h2>PRODUCTS</h2>
                <ul>
                  {PRODUCTS_FOOTER_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        {/*  */}
      </div>

      <div className="flex justify-center items-center">
        2023 JamiiHub &trade; • All Rights reserved.
        <Link to={GITHUB_LINK} className="mx-2 text-green-500">
          Source Code
        </Link>
      </div>
    </footer>
  );
}
