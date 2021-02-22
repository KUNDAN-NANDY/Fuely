import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <Button variant="outlined" 
    color="primary"
    id="setup_button"
    aria-label="Install app"
    title="Install app"
    onClick={onClick}>
        Install App
      </Button>
  );
};

export default InstallPWA;