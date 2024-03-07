import { Modal } from "antd";
import { useEffect, useState } from "react";

interface Props {
  text?: string;
}

function DemoPage(props: Props) {
  const { text } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!text) return;
    if (text.includes("打开")) {
      setIsOpen(true);
    }
    if (text.includes("关闭")) {
      setIsOpen(false);
    }
  }, [text]);

  return (
    <>
      <Modal open={isOpen}>弹窗已打开</Modal>
    </>
  );
}

export default DemoPage;
