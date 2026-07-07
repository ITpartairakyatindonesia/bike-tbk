'use client'

import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'

export function LanguageSelector(props: any) {
  // Use internal state for Studio (not in global LanguageProvider)
  const [language, setLanguage] = useState<'en' | 'id'>('en')

  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          padding: '8px',
          backgroundColor: 'transparent',
          borderRadius: '4px',
        }}
      >
        <button
          type="button"
          onClick={() => setLanguage('id')}
          style={{
            padding: '6px 12px',
            border: language === 'id' ? '2px solid #007acc' : '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          🇮🇩 Indonesian
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          style={{
            padding: '6px 12px',
            border: language === 'en' ? '2px solid #007acc' : '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          🇬🇧 English
        </button>
      </div>
      <LanguageSelectorContent {...props} language={language} />
    </div>
  )
}

// Export this context so child components can use it
// Use null as default to detect when context is not available
export const StudioLanguageContext = React.createContext<'en' | 'id' | null>(null)

function LanguageSelectorContent(props: any & { language: 'en' | 'id' }) {
  return (
    <StudioLanguageContext.Provider value={props.language}>
      {props.renderDefault(props)}
    </StudioLanguageContext.Provider>
  )
}
