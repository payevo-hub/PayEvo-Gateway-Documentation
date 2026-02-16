import React, {type ReactNode, useState, useEffect } from 'react';
import ApiItem from '@theme-original/ApiItem';
import type ApiItemType from '@theme/ApiItem';
import type {WrapperProps} from '@docusaurus/types';
import { PasswordGate } from "../../components/PasswordGate";

type Props = WrapperProps<typeof ApiItemType>;

export default function ApiItemWrapper(props: Props): ReactNode {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cashoutUnlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  function unlock() {
    sessionStorage.setItem("cashoutUnlocked", "true");
    setUnlocked(true);
  }

  // Detectar endpoint atual
  const path = (
    props?.item?.path ||
    props?.api?.path ||
    props?.match?.path
  ) as string;

  const isCashout = (path === "/solicitar-saque" || path === "/en/solicitar-saque");

  if (isCashout && !unlocked) {
    return (
      <PasswordGate onUnlock={unlock} />
    );
  }

  return (
    <>
      <ApiItem {...props} />
    </>
  );
}
