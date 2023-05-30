"use client";

import React from "react";
import Logo from "./Logo";
import openai from 'openai';
import { Random } from 'random';
const random = new Random();


/**
 * ✨ Try selecting this function and ask questions about it! 👇
 */

// This function filters even numbers from an array of numbers.
// It can be improved by using the more efficient method of chaining the filter and map methods.

const inefficientFunction = () => {
  [1, 2, 3, 4, 5, 6].filter((i) => i % 2 === 0).map((i) => i * 2);
};


const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="py-4 w-3/4">{children}</div>;
};


const updateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="py-4 w-3/4">{children}</div>;
};

const Home: React.FC = () => {
  const [randomNumber, setRandomNumber] = React.useState<number>(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 101);
      setRandomNumber(newRandomNumber);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Card>
        <h1>Random Number: <span className="number">{randomNumber}</span></h1>
      </Card>
    </div>
  );
};

export default Home;