# 🎬 Análise de Similaridade entre Usuários por Avaliação de Filmes  

Este projeto calcula a **similaridade entre dois usuários** (`x` e `y`) com base em suas avaliações de filmes/artistas, utilizando o método matemático da **Similaridade do Cosseno**. O objetivo é identificar quão próximas são suas preferências cinematográficas.  

---

## 📚 Contexto  
Em sistemas de recomendação, entender a afinidade entre usuários é crucial. Aqui, comparamos as notas dadas por `x` e `y` a oito filmes/artistas, representadas como vetores numéricos. Quanto maior a similaridade, mais alinhados são seus gostos!  

---

## 🧮 Método: *Similaridade do Cosseno*  
A fórmula calcula o ângulo entre dois vetores em um espaço multidimensional:  

![Fórmula da Similaridade do Cosseno](https://miro.medium.com/v2/resize:fit:1400/0*0dJORNoFSi9uzeMf)  

**Onde**:  
- **A · B**: Produto escalar (soma das multiplicações das avaliações correspondentes).  
- **||A|| e ||B||**: Módulos (magnitudes) dos vetores de cada usuário.  

### Passo a Passo:  
1. **Converter avaliações em vetores** (ex: `[3.5, 2, 0, ...]`).  
2. **Calcular o produto escalar** entre os vetores de `x` e `y`.  
3. **Calcular o módulo** de cada vetor (raiz quadrada da soma dos quadrados).  
4. **Dividir o produto escalar pelo produto dos módulos** para obter a similaridade (valor entre `0` e `1`).  

---

## 🎥 Dados das Avaliações  
As notas são armazenadas em um objeto JavaScript:  
```javascript
const filmes_notas = {
    "x": {
        "blues_traveler": 3.5,
        "norah_jones": 4.5,
        // ... (outros filmes)
    },
    "y": {
        "blues_traveler": 1,
        "norah_jones": 5,
        // ... (outros filmes)
    }
};
