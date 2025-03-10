// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// interface AnimatedCursorProps {
//   innerSize?: number;
//   outerSize?: number;
//   innerScale?: number;
//   outerScale?: number;
//   outerAlpha?: number;
//   innerStyle?: React.CSSProperties;
//   outerStyle?: React.CSSProperties;
// }

// const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
//   innerSize = 8,
//   outerSize = 35,
//   innerScale = 2,
//   outerScale = 2,
//   outerAlpha = 0,
//   innerStyle = { backgroundColor: "white" },
//   outerStyle = { border: "3px solid white" },
// }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Inner Cursor */}
//       <motion.div
//         className="fixed top-0 left-0 z-50"
//         style={{
//           width: innerSize,
//           height: innerSize,
//           borderRadius: "50%",
//           position: "fixed",
//           ...innerStyle, // Apply custom styles
//         }}
//         animate={{
//           x: position.x - innerSize / 2, // Centering
//           y: position.y - innerSize / 2,
//           scale: isHovering ? innerScale : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 30,
//         }}
//       />

//       {/* Outer Cursor */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-40"
//         style={{
//           width: outerSize,
//           height: outerSize,
//           borderRadius: "50%",
//           position: "fixed",
//           opacity: outerAlpha,
//           ...outerStyle, // Apply custom styles
//         }}
//         animate={{
//           x: position.x - outerSize / 2, // Centering
//           y: position.y - outerSize / 2,
//           scale: isHovering ? outerScale : 1,
//           opacity: isHovering ? 0.5 : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 30,
//         }}
//       />
//     </>
//   );
// };

// export default AnimatedCursor;
