import React from 'react'
import { bird_SVG } from '../../utils/svg';
import { motion } from "framer-motion";


export const AiHaveMovies = () => {
  return (
    <div className="bg-white/20 w-[100%] h-45 flex justify-center items-center backdrop-blur-2xl">
        <motion.div
        animate={{ x: ["-290%", "240%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: 47, }}
        >
            {bird_SVG}
        </motion.div>;
      <p className="text-white/80 font-semibold text-3xl ">
        We don't have this type of movies
      </p>
    </div>
  );
}
