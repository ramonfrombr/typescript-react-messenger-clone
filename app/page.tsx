import Image from "next/image";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* MessageList */}

      <MessageList />
      <ChatInput />
      {/* ChatInput */}
    </main>
  );
}
