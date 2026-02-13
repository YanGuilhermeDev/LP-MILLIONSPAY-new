import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { BeneficiosSection } from "@/components/landing/beneficios-section"
import { SolucoesSection } from "@/components/landing/solucoes-section"
import { TaxasSection } from "@/components/landing/taxas-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { PremiacoesSection } from "@/components/landing/premiacoes-section"
import { FormularioSection } from "@/components/landing/formulario-section"
import { DuvidasSection } from "@/components/landing/duvidas-section"
import { CTASection } from "@/components/landing/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header / Navegação */}
      <Header />

      {/* Section Home */}
      <HeroSection />

      {/* Section Benefícios */}
      <BeneficiosSection />

      {/* Section Soluções */}
      <SolucoesSection />

      {/* Section Taxas */}
      <TaxasSection />

      {/* Section Depoimentos */}
      <TestimonialSection />

      {/* Section Placas (Premiações) */}
      <PremiacoesSection />

      {/* Section Formulário */}
      <FormularioSection />

      {/* Section Dúvidas */}
      <DuvidasSection />

      {/* Section CTA */}
      <CTASection />
    </main>
  )
}
