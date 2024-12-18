---
layout: default
title: Basics
nav_order: 2
permalink: docs/basics
---

## Basics Review 

Before jumping into any actual content, we have to be familiar with the following aspects: 
- Rates Conversion
- Fundamental Theorem of Asset Pricing
- Ito's Formulas

Each aspect will be crucial for us to set up a universe with stable assumptions to solve differential equations and derive any analytical formulas. 

From my understanding, rates conversion is needed when you want a pricing formula with a rate function. Fundamental Theorem is definitely used to ensure arbitrage free so we can solve the functions by change of risk-neutral measure. Ito's formulas are the foundations for us to solve any differentials. 

### Rates Conversion 

\usepackage[T1]{fontenc}
\usepackage{mathptmx}
\usepackage{amsmath}
\usepackage{mathtools}
\usepackage{tikz}
\usetikzlibrary{matrix,positioning}


\subsection{Zero Coupon Bond Price}
$$
P(t, T) = exp(-R(t, T) \cdot (T-t))
$$
\subsection{ZCB TYM/Spot Rate}
$$
R(t, T) = \frac{-log P(t, T)}{T-t} = \frac{1}{T-t} \int_{t}^{T} f(t, u)du
$$


\begin{align*}
    r(t) = \lim_{T \to t}R(t, T) &= \lim_{T \to t} f(t, T)\\
    \to Cash \ C(t): dC(t) &= r(t)C(t)dt\\
    C(T) &= C(0)e^{\int_{0}^{t} r(u)du}
\end{align*}

$$
F(t, T, S) = \frac{log (\frac{P(t, T)}{P(t, S)})}{S-T}
$$
Instantaneous Forward Rate
\begin{align*}
    f(t, T) &= \lim_{S \to T} F(t, T, S) \\
    &= -\frac{d}{dT} log P(t, T) \\
    &= -\frac{1}{P(t, T)}\frac{dP(t, T)}{dT} \\
    &= \frac{d}{dT} (T-t) R(t, T) \\
    &= R(t, T) + (T-t) \frac{dR(t, T)}{dT}
\end{align*}

\subsection{Par-Yield}
$P_n(t)$ is n-period Coupon Bond
\begin{align*}
    P_n(t) &= 100 = p(t, t+n) \sum_{i=1}^{n} P(t, t+i) +100 P(t, t+n)\\
    P(t, t+n) &= 100 \frac{1-P(t, t+n)} {\sum_{i=1}^{n} P(t, t+i)} \text{  (For Bootstrapping)}
\end{align*}

\subsection{LIBOR/SOFR Rate}
For tenor $\tau$,
$$
1+ \tau L(t, t+\tau) = \frac{1}{P(t, t+\tau)} = e^{R(t, t+\tau)}
$$

Swap Rate

\begin{tikzpicture}
  \draw [|-|] [thick] (0,0) node[below] {$t$} -- (2,0) node[below] {$t+1$}
  -- (2,0) -- (4,0)   node[below] {$t+2$}
  -- (4,0) -- (10,0) node[midway, below] {$\ldots$} node[below] {$t+n$};
  \coordinate[label=center:$\text{Pay fix rate S(t, t+n)}$] (A) at (1.5,0.5);
  \coordinate[label=left:$\text{Receive float rate L(t+i-1, t+i)}$] (A) at (4.5,-0.75);
\end{tikzpicture}

\section{The Evolution of Interest Rate Modeling}
\subsection{Evolution}
$$
dr(t) = k(\theta - r(t)) + \sigma d\tilde{W}(t) \hspace{0.5cm} \text{(Uasicek 1977)}
$$

$$
dr(t) = k(\theta - r(t))dt + \sigma \sqrt{r(t)} d\tilde{W}(t) \hspace{0.5cm} \text{(CIR 1985)}
$$

$$
dr(t) = (\theta(t)-k(t)r(t))dt + \sigma(t)r(t) d\tilde{W}(t) \hspace{0.5cm} \text{(Hull-White 1990)}
$$

\section{For HJM}
$$
E_{Q}\left(e^{-\int_{t}^{T} r(u)du} \right)
$$

$$
e^{-\int_{t}^{T} f(t,u)du}
$$

$$
df(t, T) = \alpha (t, T)dt + \sigma(t, T)dW(t)
$$

$$
\frac{\mu(t, S_1)-r(t)}{\sigma(t, S_1)} = 
$$



### Fundamental Theorem of Asset Pricing 

### Ito's Formulas
