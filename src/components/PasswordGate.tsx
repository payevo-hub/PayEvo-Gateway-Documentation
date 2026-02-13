import React, { useState } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const { siteConfig } = useDocusaurusContext();
  const CASHOUT_PASSWORD = siteConfig.customFields.cashoutPassword;

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === CASHOUT_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      paddingBottom: "8rem",
    }}>
      <form
        className="openapi-explorer__request-form"
        style={{
          padding: "1.5rem",
          borderRadius: 8,
          maxWidth: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>🔒 Endpoint protegido</h3>
        <p style={{
          marginBottom: "0rem",
        }}>
          Este endpoint requer uma senha para visualização.
        </p>
        <p style={{
          marginBottom: "1rem",
        }}>Solicite-a com o suporte.</p>

        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite a senha"
          style={{ width: "100%" }}
          className="openapi-explorer__form-item-input"
        />

        <p style={{ 
          color: "red",
          visibility: error ? "visible" : "hidden",
          marginBottom: 0,
          marginTop: "0.5rem",
        }}>
          Senha incorreta
        </p>


        <button 
          onClick={submit}
          className="openapi-explorer__request-btn"
          style={{ marginTop: "0.5rem" }}
        >
          Desbloquear
        </button>
      </form>
    </div>
  );
}
