import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import '../src/index.css';
import '../src/App.css';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Back": "Back",
          "Language": "Language",
          "Export to CSV": "Export to CSV",
          'Search by Building Name': 'Search by Building Name',
          'レストラン': 'Restaurant',
          'カフェ': 'Cafe',
          'ドラックストア': 'Drug Store',
          '総合病院': 'Hospital',
          '学校': 'School',
          'ジム': 'Gym',
          'コンビニ': 'Convenient Store',
          '公園': 'Park',
          'バス停': 'Bus Station',
          'クリニック': 'Clinic',
          'スーパー': 'Supermarket',
          '体育館': 'Sports Hall',
          'メートル': ' meters',
        }
      },
      ja: {
        translation: {
          "Back": "戻る",
          "Language": "言語",
          "Export to CSV": "CSVを出力",
          'Search by Building Name': '物件名で検索',
          'レストラン': 'レストラン',
          'カフェ': 'カフェ',
          'ドラックストア': 'ドラックストア',
          '総合病院': '総合病院',
          '学校': '学校',
          'ジム': 'ジム',
          'コンビニ': 'コンビニ',
          '公園': '公園',
          'バス停': 'バス停',
          'クリニック': 'クリニック',
          'スーパー': 'スーパー',
          '体育館': '体育館',
          'メートル': 'メートル',
        }
      },
      zh: {
        translation: {
          "Back": "返回",
          "Language": "语言",
          "Export to CSV": "导出CSV",
          'Search by Building Name': '搜索物件名',
          'レストラン': '餐厅',
          'カフェ': '咖啡馆',
          'ドラックストア': '药妆店',
          '総合病院': '综合医院',
          '学校': '学校',
          'ジム': '健身房',
          'コンビニ': '便利店',
          '公園': '公园',
          'バス停': '巴士站',
          'クリニック': '诊所',
          'スーパー': '超市',
          '体育館': '体育館',
          'メートル': '米',
        }
      }
    },
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false
    }
  });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 