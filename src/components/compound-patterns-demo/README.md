# Compound Patterns Demo - RestaurantCard

Este é um exemplo de implementação do **Compound Pattern** aplicado ao componente RestaurantCard.

## O que é Compound Pattern?

O Compound Pattern é um padrão de design que permite criar componentes mais flexíveis e reutilizáveis. Em vez de ter um componente monolítico com muitas props, você divide a funcionalidade em sub-componentes menores que podem ser compostos de diferentes maneiras.

## Vantagens do Compound Pattern

✅ **Flexibilidade**: Permite diferentes composições do mesmo componente  
✅ **Reutilização**: Sub-componentes podem ser usados independentemente  
✅ **Manutenibilidade**: Código mais organizado e fácil de manter  
✅ **Customização**: Cada parte pode ter suas próprias props e estilos  
✅ **API Clara**: Interface mais intuitiva para o desenvolvedor

## Estrutura do Componente

```
RestaurantCard/
├── RestaurantCard.tsx      # Componente principal + Context
├── RestaurantImage.tsx     # Sub-componente para imagem
├── RestaurantHeader.tsx    # Sub-componente para nome/culinária
├── RestaurantSpecialties.tsx # Sub-componente para especialidades
├── RestaurantInfo.tsx      # Sub-componente para info (rating, tempo, etc.)
├── RestaurantContent.tsx   # Container para conteúdo interno
├── restaurant-card.styles.ts # Estilos
└── index.ts               # Exportações (Compound Pattern)
```

## Como Usar

### Uso Básico

```tsx
<RestaurantCard {...data}>
    <RestaurantCard.Image />
    <RestaurantCard.Content>
        <RestaurantCard.Header />
        <RestaurantCard.Specialties />
        <RestaurantCard.Info />
    </RestaurantCard.Content>
</RestaurantCard>
```

### Composições Customizadas

```tsx
// Sem imagem
<RestaurantCard name="Tokyo Sushi" cuisine="Japonesa">
  <RestaurantCard.Content>
    <RestaurantCard.Header />
    <RestaurantCard.Info showIcons={false} />
  </RestaurantCard.Content>
</RestaurantCard>

// Layout diferente
<RestaurantCard {...data}>
  <RestaurantCard.Content>
    <RestaurantCard.Info />
    <RestaurantCard.Header />
  </RestaurantCard.Content>
  <RestaurantCard.Image />
</RestaurantCard>
```

## Implementação Técnica

### Context API

-   Usa React Context para compartilhar dados entre sub-componentes
-   Hook `useRestaurantCard()` para acessar o contexto
-   Permite override de props em cada sub-componente

### Compound Pattern Structure

```tsx
const RestaurantCard = Object.assign(RestaurantCardRoot, {
    Image: RestaurantImage,
    Header: RestaurantHeader,
    Specialties: RestaurantSpecialities,
    Info: RestaurantInfo,
    Content: RestaurantContent,
});
```

## Comparação: Antes vs Depois

### Antes (Componente Monolítico)

```tsx
<RestaurantsOpenCard
    id="1"
    name="Bella Italia"
    cuisine="Italiana"
    specialties="Pizza - Massas"
    rating="4.8"
    deliveryInfo="Grátis"
    time="25-35 min"
    image={bellaitalia}
/>
```

**Problemas:**

-   Layout fixo
-   Muitas props obrigatórias
-   Difícil customização
-   Baixa reutilização

### Depois (Compound Pattern)

```tsx
<RestaurantCard name="Bella Italia" cuisine="Italiana">
    <RestaurantCard.Image />
    <RestaurantCard.Content>
        <RestaurantCard.Header />
        <RestaurantCard.Info />
    </RestaurantCard.Content>
</RestaurantCard>
```

**Benefícios:**

-   Layout flexível
-   Props opcionais
-   Fácil customização
-   Alta reutilização
-   API mais limpa

## Exemplos de Casos de Uso

1. **Card Simples**: Só nome e rating
2. **Card sem Imagem**: Para listas compactas
3. **Card Promocional**: Layout diferente com destaque
4. **Card Minimalista**: Apenas informações essenciais
5. **Card Customizado**: Estilos e props específicos

## Executar Demo

```bash
import { CompoundPatternsDemo } from './CompoundPatternsDemo';

// Use no seu app
<CompoundPatternsDemo />
```
