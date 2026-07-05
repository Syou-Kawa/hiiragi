import Link from "next/link";
import Flower from "@/components/Flower";
import SnsIcons from "@/components/SnsIcons";
import CtaBand from "@/components/CtaBand";
import WorksGrid from "@/components/WorksGrid";
import { fetchWorks, type WorksResponse } from "@/lib/api";

function HeroDeco({ pos }: { pos: string }) {
  return (
    <svg className={`hero-deco ${pos}`} viewBox="0 0 200 200" fill="none">
      <path d="M20 180 Q60 120 50 70 Q45 40 70 20" stroke="#7c9a72" strokeWidth="2" />
      <ellipse cx="72" cy="18" rx="16" ry="8" transform="rotate(-40 72 18)" stroke="#7c9a72" strokeWidth="2" />
      <ellipse cx="48" cy="65" rx="14" ry="7" transform="rotate(30 48 65)" stroke="#7c9a72" strokeWidth="2" />
      <ellipse cx="55" cy="120" rx="14" ry="7" transform="rotate(-25 55 120)" stroke="#7c9a72" strokeWidth="2" />
    </svg>
  );
}

export default async function Home() {
  let data: WorksResponse = { works: [], categories: [] };
  try {
    data = await fetchWorks();
  } catch {
    // APIが起動していないときも表示は継続
  }

  return (
    <>
      <section className="hero">
        <HeroDeco pos="tl" />
        <HeroDeco pos="br" />
        <div className="hero-icon">
          {/* ★アイコン画像: backend/public/images/icon.jpg を差し替え */}
          <img src={`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/images/icon.jpg`} alt="ひいらぎのアイコン" />
        </div>
        <p className="hero-en">Web Designer / Coder</p>
        <h1>ひいらぎ</h1>
        <p className="role">やさしく、お客様の心に寄り添うデザインを。</p>
        <p className="lead">
          はじめまして、ひいらぎです。<br />
          お客様に寄り添ったヒヤリングを大切に、<br />
          Webサイト・LP・バナーのデザインとコーディングを承っています。
        </p>
        <div className="hero-btns">
          <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
          <Link href="/contact?kind=request" className="btn btn-accent">制作のご依頼</Link>
          <Link href="/works" className="btn btn-outline">作品を見る</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="en">About</span>
            <span className="ja">わたしについて</span>
            <Flower />
          </div>
          <p style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            デザインスクール卒業後、フリーランスのWebデザイナー・コーダーとして活動しています。<br />
            「見た人の心を動かす」ような、ワクワクするデザインが得意です。
          </p>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/about" className="btn btn-outline">経歴・実績をくわしく見る</Link>
          </p>
        </div>
      </section>

      <section className="section bg-green">
        <div className="container">
          <div className="section-title">
            <span className="en">Works</span>
            <span className="ja">制作実績</span>
            <Flower />
          </div>
          <WorksGrid works={data.works.slice(0, 3)} />
          <p style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/works" className="btn btn-primary">すべての作品を見る</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="en">Service</span>
            <span className="ja">できること・料金</span>
            <Flower />
          </div>
          <p style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 28px" }}>
            Webサイト制作・LP制作・バナー制作・コーディング代行を承っています。
          </p>
          <p style={{ textAlign: "center" }}>
            <Link href="/service" className="btn btn-outline">サービス内容を見る</Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="お仕事のご依頼・ご相談はお気軽に"
        text="「こんなこと頼めるかな?」という段階でも大丈夫です。まずはお話をお聞かせください。"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-title" style={{ marginBottom: 28 }}>
            <span className="en">Follow Me</span>
            <span className="ja">SNSでも発信しています</span>
          </div>
          <SnsIcons />
        </div>
      </section>
    </>
  );
}
