---
layout: default
title: Stock Prices
parent: Equity
grand_parent: Models
nav_order: 1
permalink: docs/models/equity/stock_prices
---

# Stock Prices
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Monte Carlo Approach

```python
class StockPrices():
    # Generate Stock Prices using Monte Carlo Simulation
    def init(self, hist_stock_price, T):
        # Read in historical stcok prices 
        self.hist_stock_price = hist_stock_price 
        self.St = hist_stock_price.iloc[-1, 0] 
        self.T = T 

    def stock_price(self):
        # Simulate 1 path of stock prices
        path_length = int(self.T)
```

{: .error }
> Please contact us for full code
