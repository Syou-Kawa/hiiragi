import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "自己紹介" };

export default function About() {
  return (
    <>
      <div className="page-head">
        <div className="en">About</div>
        <div className="ja">自己紹介</div>
      </div>

      <section className="section">
        <div className="container">
          <div className="profile-flex">
            <div className="profile-img">
              {/* ★プロフィール画像を差し替え */}
              <img src={`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/images/icon.jpg`} alt="ひいらぎ" />
            </div>
            <div className="profile-text">
              <h3>ひいらぎ / Webデザイナー・コーダー</h3>
              <p>
                はじめまして、ひいらぎと申します。<br />
                お墓の管理事務にて務めており、そこでSNS運用を担当しておりました。その後Web制作会社で4年間、デザインとコーディングの実務を経験したのち、フリーランスとして独立しました。
                人の心に寄り添うヒヤリングを得意としています。<br /><br />
                「HP作りたいけど頼むのが不安」という思いに寄り添いお客様目線でヒヤリングを進めて参ります。
                また、デザインからコーディングまで一貫してお応えできるのが強みです。
              </p>

              <h3>経歴</h3>
              <ul className="timeline">
                <li><span className="year">2020</span>お墓の管理事務に入社。SNS運用など担当</li>
                <li><span className="year">2023</span>Web制作会社に入社。フロントエンド開発とWebデザイン制作、UI・UX設計を担当</li>
                <li><span className="year">2026</span>日本デザインスクール 卒業</li>
                <li><span className="year">2026</span>フリーランスとして独立。屋号「ひいらぎ」で活動開始</li>
              </ul>

              <h3>実績</h3>
              <p>
                Webサイト制作 20件以上 / バナー制作 30本以上<br />
                コーディング代行(デザインカンプからの実装) 10件以上
              </p>

              <h3>スキル</h3>
              <div className="skill-tags">
                {["HTML / CSS", "JavaScript", "react", "WordPress", "Figma", "Photoshop", "Illustrator"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="いっしょに素敵なサイトをつくりませんか?" text="制作のご依頼・ご相談はお気軽にどうぞ。" />
    </>
  );
}
