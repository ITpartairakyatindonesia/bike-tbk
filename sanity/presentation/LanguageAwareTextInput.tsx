'use client'

import { useContext } from 'react'
import { set } from 'sanity'
import { StudioLanguageContext } from './LanguageSelector'

export function LanguageAwareTextInput(props: any) {
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
          <textarea
            value={value.en || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('en', e.currentTarget.value)}
            placeholder="English"
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>Indonesian</label>
          <textarea
            value={value.id || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('id', e.currentTarget.value)}
            placeholder="Indonesian"
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {language === 'en' && (
        <textarea
          value={value.en || ''}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('en', e.currentTarget.value)}
          placeholder="English"
          rows={3}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'inherit',
            fontSize: 'inherit',
          }}
        />
      )}
      {language === 'id' && (
        <textarea
          value={value.id || ''}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('id', e.currentTarget.value)}
          placeholder="Indonesian"
          rows={3}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'inherit',
            fontSize: 'inherit',
          }}
        />
      )}
    </div>
  )
}
