import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";

export default function Mates({ params }) {
  return <h1>Mate {params.mate}</h1>;
}
