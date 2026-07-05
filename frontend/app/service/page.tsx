import type { Metadata } from "next";
import Link from "next/link";
import Flower from "@/components/Flower";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "サービス内容・料金" };

const PLANS = [
  {
    name: "Webサイト制作", price: "¥150,000", unit: "〜", note: "3ページ程度の場合の目安です", featured: false,
    items: ["オリジナルデザイン", "レスポンシブ対応(スマホ対応)", "お問い合わせフォーム設置", "基本的なSEO対策"],
  },
  {
    name: "LP制作", price: "¥80,000", unit: "〜", note: "1ページ / デザイン+コーディング", featured: true,
    items: ["成果につながる構成のご提案", "オリジナルデザイン", "レスポンシブ対応", "アニメーション実装"],
  },
  {
    name: "バナー制作", price: "¥5,000", unit: "〜 / 1本", note: "サイズ違い展開は+¥2,000/本", featured: false,
    items: ["SNS広告・ECサイト用など", "修正2回まで無料", "複数本のセット割あり", "最短3日で納品", "ABテスト用の別案制作も可能"],
  },
];

const FLOW = [
  ["お問い合わせ", "フォームまたはSNSのDMからご連絡ください。「なんとなくのイメージ」だけでも大丈夫です。"],
  ["ヒアリング・お見積もり", "目的・ご予算・納期・参考イメージなどをおうかがいし、無料でお見積もりをお出しします。"],
  ["ご契約・制作開始", "お見積もりにご納得いただけましたら制作開始。進捗は随時ご共有します。"],
  ["ご確認・修正", "デザイン確認のうえ、修正のご要望に対応します(回数はプランによります)。"],
  ["納品・お支払い", "完成データの納品・サイト公開ののち、銀行振込にてお支払いをお願いしています。"],
];

export default function Service() {
  return (
    <>
      <div className="page-head">
        <div className="en">Service</div>
        <div className="ja">サービス内容・料金</div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="en">Menu</span>
            <span className="ja">サービス内容と料金の目安</span>
            <Flower />
          </div>
          <div className="price-grid">
            {PLANS.map((p) => (
              <div key={p.name} className={`price-card ${p.featured ? "featured" : ""}`}>
                <h3>{p.name}</h3>
                <p className="price">{p.price}<small>{p.unit}</small></p>
                <p className="note">{p.note}</p>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <Link href="/contact?kind=request" className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}>
                  相談してみる
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 30, fontSize: "0.85rem", color: "var(--text-light)" }}>
            ※コーディングのみのご依頼(デザインカンプからの実装)も承ります。<br />
            ※上記はすべて税込の目安料金です。内容により変動しますので、まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      <section className="section bg-green">
        <div className="container">
          <div className="section-title">
            <span className="en">Flow</span>
            <span className="ja">ご依頼の流れ・お見積もり方法</span>
            <Flower />
          </div>
          <ol className="flow-steps">
            {FLOW.map(([t, d]) => (
              <li key={t}><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        spaced
        title="まずは無料でお見積もり"
        text="ご予算やご要望に合わせて、いちばん良い形をご提案します。"
        label="制作を依頼する"
        href="/contact?kind=request"
      />
    </>
  );
}
