import { useState, useEffect } from "react";

type Locale = "en" | "it" | "fr" | "de" | "es" | string;

export function languageImporter(locale: Locale) {
  switch (locale) {
    case "de":
      return import("../translations/locales/de.json");
    case "es":
      return import("../translations/locales/es.json");
    case "fr":
      return import("../translations/locales/fr.json");
    case "it":
      return import("../translations/locales/it.json");
    default:
    case "en":
      return import("../translations/locales/en.json");
  }
}

export default function useMessagesLoading(language: Locale) {
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    languageImporter(language).then((mod) => {
      setMessages(mod.default);
      setLoading(false);
    });
  }, [language]);

  return {
    loading,
    messages,
  };
}
