import React, { useRef, useState, useEffect } from "react";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  TrashIcon,
  PhotoIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const COLORS = [
  "#0F172A",
  "#DB2777",
  "#FB7185",
  "#F59E42",
  "#FBBF24",
  "#10B981",
  "#3B82F6",
  "#A21CAF",
  "#F3F4F6",
  "#FFFFFF",
];

export default function DoodleCanvas({ onSave }) {
  const canvasRef = useRef();
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState(COLORS[0]);
  const [brush, setBrush] = useState(8);
  const [history, setHistory] = useState([]);
  const [redo, setRedo] = useState([]);
  const [lastPoint, setLastPoint] = useState(null);
  const [lastSnapshot, setLastSnapshot] = useState(null);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
      y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top,
    };
  };

  const startDraw = (e) => {
    setDrawing(true);
    const { x, y } = getPos(e);
    setLastPoint({ x, y });
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = brush;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLastPoint({ x, y });
  };

  const stopDraw = () => {
    if (drawing) {
      setDrawing(false);
      setLastPoint(null);
      saveHistory();
    }
  };

  const saveHistory = () => {
    const url = canvasRef.current.toDataURL();
    setHistory((h) => [url, ...h]);
    setRedo([]);
    setLastSnapshot(url);
  };

  const handleUndo = () => {
    if (!history.length) return;
    setRedo([history[0], ...redo]);
    const next = history.slice(1);
    setHistory(next);
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    if (next[0]) {
      const img = new window.Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = next[0];
    } else {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const handleRedo = () => {
    if (!redo.length) return;
    setHistory([redo[0], ...history]);
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const img = new window.Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = redo[0];
    setRedo(redo.slice(1));
  };

  const handleClear = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    saveHistory();
  };

  const handleExport = () => {
    const url = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "doodle.png";
    link.href = url;
    link.click();
  };

  const handleSave = () => {
    const url = canvasRef.current.toDataURL("image/png");
    if (onSave) onSave(url);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    saveHistory();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl mx-auto flex flex-col items-center mb-10"
    >
      <canvas
        ref={canvasRef}
        width={900}
        height={550}
        className="border-[6px] border-white dark:border-gray-800 rounded-3xl shadow-inner drop-shadow-md hover:shadow-2xl transition duration-300 ease-in-out cursor-crosshair"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />

      <div className="flex gap-2 mt-6 flex-wrap justify-center">
        {COLORS.map((c) => (
          <button
            key={c}
            className={`w-8 h-8 rounded-full border-4 transition-all duration-150 hover:scale-110 focus:ring-2 focus:ring-offset-2 ${
              color === c
                ? "border-pink-400 shadow-lg ring-2 ring-pink-400"
                : "border-gray-300 dark:border-gray-600"
            }`}
            style={{ background: c, cursor: "pointer" }}
            onClick={() => setColor(c)}
            aria-label={`Pick color ${c}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <input
          type="range"
          min={2}
          max={40}
          value={brush}
          onChange={(e) => setBrush(Number(e.target.value))}
          className="accent-pink-500 w-48"
        />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Brush: {brush}px
        </span>
      </div>

      {lastSnapshot && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2 text-xs font-medium">Last snapshot preview:</p>
          <img
            src={lastSnapshot}
            alt="Last snapshot"
            className="w-24 h-auto rounded-lg shadow border border-gray-300 dark:border-gray-600"
          />
        </div>
      )}

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <button
          className="icon-btn hover:text-blue-500"
          onClick={handleUndo}
          title="Undo"
        >
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="icon-btn hover:text-blue-500"
          onClick={handleRedo}
          title="Redo"
        >
          <ArrowUturnRightIcon className="h-6 w-6" />
        </button>
        <button
          className="icon-btn hover:text-red-500"
          onClick={handleClear}
          title="Clear"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
        <button
          className="icon-btn hover:text-blue-400"
          onClick={handleExport}
          title="Export PNG"
        >
          <PhotoIcon className="h-6 w-6" />
        </button>
        <button
          className="icon-btn hover:text-green-500"
          onClick={handleSave}
          title="Save to hall of art"
        >
          <CloudArrowDownIcon className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  );
}
