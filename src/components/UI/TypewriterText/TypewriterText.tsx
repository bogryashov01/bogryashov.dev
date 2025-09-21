'use client';

import { useState, useEffect, useMemo } from 'react';

interface TypewriterTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
  speed?: number;
  lineDelay?: number; // задержка между строками
}

export default function TypewriterText({ text, className, delay = 0, speed = 50, lineDelay = 500 }: TypewriterTextProps) {
  const lines = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Запускаем анимацию после delay
    const startTimer = setTimeout(() => {
      setIsTyping(true);
      setDisplayLines(new Array(lines.length).fill(''));
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, lines.length]);

  useEffect(() => {
    if (!isTyping || currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      // Печатаем символ
      const timer = setTimeout(() => {
        setDisplayLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Строка закончена, переходим к следующей
      if (currentLineIndex < lines.length - 1) {
        const lineTimer = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, lineDelay);

        return () => clearTimeout(lineTimer);
      } else {
        // Все строки закончены
        setIsFinished(true);
        const cursorTimer = setTimeout(() => {
          setShowCursor(false);
        }, 1000);

        return () => clearTimeout(cursorTimer);
      }
    }
  }, [currentLineIndex, currentCharIndex, isTyping, lines, speed, lineDelay]);

  // Мигающий курсор
  useEffect(() => {
    if (!showCursor || isFinished) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showCursor, isFinished]);

  return (
    <h1
      className={className}
      style={{
        opacity: 1,
        transition: 'opacity 0.6s ease-in-out',
      }}>
      {displayLines.map((line, index) => (
        <div key={index} style={{ minHeight: '1.2em' }}>
          {line}
          {isTyping && index === currentLineIndex && (
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s ease-in-out',
                color: '#f5c542', // accent color
              }}>
              |
            </span>
          )}
        </div>
      ))}
    </h1>
  );
}
