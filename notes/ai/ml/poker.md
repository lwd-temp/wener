---
tags:
  - Practice
---

# Poker

- https://github.com/Stephy-Cheung/Yolov4_project-Object_detection_pokercards
- https://juejin.cn/post/7312046910045650983
- https://www.kaggle.com/datasets/jaypradipshah/the-complete-playing-card-dataset
- https://universe.roboflow.com/roboflow-100/poker-cards-cxcvz
  - 完整
- https://universe.roboflow.com/augmented-startups/playing-cards-ow27d

| en                       | for                           |
| ------------------------ | ----------------------------- |
| Spade, Pique, Pikes      | ♠️, 黑桃                      |
| Hearts                   | ♥️, 红桃,红心                 |
| Diamond, Carreaux, Tiles | ♦️, 方块                      |
| Clubs, Trefoil, Clover   | ♣️, 梅花, 三叶草, 法语 Trèfle |
| Jack                     | J, 侍从                       |
| Queen                    | Q, 王后                       |
| King                     | K, 国王                       |
| Ace                      | A, A牌                        |
| Joker                    |
| Black/Little Joker       | 小王                          |
| Red/Big Joker            | 大王                          |
| Wild Card                | 百搭牌, 替用牌                |

**Labels**

```js
['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'].flatMap((v) => ['S', 'H', 'D', 'C'].map((s) => v + s)).join('\n');
// 有些 label 会做 sort
['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  .flatMap((v) => ['S', 'H', 'D', 'C'].map((s) => v + s))
  .sort()
  .join('\n');

['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  .flatMap((v) => ['S', 'H', 'D', 'C'].map((s) => v + s))
  .sort()
  .map((v) => ({ name: v, type: 'any', attributes: [] }));

let base = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  .flatMap((v) => ['S', 'H', 'D', 'C'].map((s) => v + s))
  .sort();
base.unshift('Front', 'Back'); // 正面背面
base.push('RedJoker', 'BlackJoker'); // 如果需要 Joker, 可能还存在 替用牌, Wild Card
base.unshift('Card'); // 如果只需要识别牌
base.map((v) => ({ name: v, type: 'any', attributes: [] }));

/* CVAT
[
  {
    "name": "10C",
    "type": "any",
    "color": "#ff007c",
    "attributes": [{
      "name": "a",
      "input_type": "radio",
      "mutable": true,
      "values": [
        "b"
      ],
      "default_value": "b"
    }]
  }
]
*/
```

**BAC**

| English Label               | 中文标签       |
| --------------------------- | -------------- |
| Shuffling                   | 洗牌           |
| Cutting                     | 切牌           |
| Burning Cards               | 烧牌           |
| Dealing Cards               | 发牌           |
| Player Betting              | 玩家下注       |
| Revealing Player Cards      | 揭示玩家牌     |
| Revealing Banker Cards      | 揭示庄家牌     |
| Calculating Results         | 计算结果       |
| Collecting and Paying Chips | 收集和支付筹码 |
| Idle State                  | 空闲状态       |

```
Dealing
PlayerBetting
RevealingBankerCards
RevealingPlayerCards
CalculatingResults
CollectingAndPayingChips
IdleState
Shuffling
Cutting
Burning
```
