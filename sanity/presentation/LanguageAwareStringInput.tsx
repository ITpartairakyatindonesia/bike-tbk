'use client'

import { useContext } from 'react'
import { set } from 'sanity'
import { StudioLanguageContext } from './LanguageSelector'

export function LanguageAwareStringInput(props: any) {
  // Get language context, fall back to showing both if not available
  const languageContext = useContext(StudioLanguageContext)
  const hasContext = languageContext !== null
  const language: 'en' | 'id' = languageContext || 'en'

  const value = props.value || { en: '', id: '' }

  const handleChange = (field: 'en' | 'id', newValue: string) => {
    // For object fields, we need to set the entire object with the updated field
    const newValueObj = { ...value, [field]: newValue }
    props.onChange(set(newValueObj))
  }

  if (!hasContext) {
    // Fallback: show both languages when not in context
    return (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>English</label>
          <input
            type="text"
            value={value.en || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('en', e.currentTarget.value)}
            placeholder="English"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>Indonesian</label>
          <input
            type="text"
            value={value.id || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('id', e.currentTarget.value)}
            placeholder="Indonesian"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {language === 'en' && (
        <input
          type="text"
          value={value.en || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('en', e.currentTarget.value)}
          placeholder="English"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      )}
      {language === 'id' && (
        <input
          type="text"
          value={value.id || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('id', e.currentTarget.value)}
          placeholder="Indonesian"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      )}
    </div>
  )
}
