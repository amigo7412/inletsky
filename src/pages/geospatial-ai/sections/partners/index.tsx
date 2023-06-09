import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Grid, Heading, Link } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";

import Img1 from "../../../../assets/illustration/partners/1.svg"
import Img2 from "../../../../assets/illustration/partners/2.svg"
import Img3 from "../../../../assets/illustration/partners/3.svg"
import Img4 from "../../../../assets/illustration/partners/4.png"
import Img5 from "../../../../assets/illustration/partners/5.svg"
import useStore from "../../../../useStore";

const PatnersSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "6rem"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "1rem",
                    queries: {
                        768: {
                            vAlign: "center"
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Badge>{T("geospatial.partners.badge")}</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Heading level={1}>{T("geospatial.partners.title")}</Heading>
                    </motion.div>
                </Flex>
                <Grid $style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    gap: "2rem",
                    w: "100%",
                    columns: "5",
                    queries: {
                        768: {
                            columns: "3"
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 + 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img1} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img2} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img3} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img4} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img5} />
                    </motion.div>
                </Grid>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <Link to="" $style={{
                        color: GV("danger"),
                        textTransform: "uppercase"
                    }}>{T("geospatial.partners.link")}</Link>
                </motion.div>
            </Flex>
        </Subsection>
    )
}

export default PatnersSection;
