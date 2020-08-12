---
title: CollectionViewの基礎
date: "2020-08-12T18:00:00.000Z"
description: "CollectionViewの基礎についての内容です。"
group: "blog"
---

# はじめに
今回は、UINavigationControllerとUICollectionViewControllerとUIViewControllerを使いました。主に、CollectoinViewの使い方を記しました。

# 完成品
cellをタップすると、簡単な画面遷移とデータの移行をしています。

<img width="286" alt="preview1.png" src="../../assets/collectionViewSample/preview1.png">
<img width="304" alt="preview2.png" src="../../assets/collectionViewSample/preview2.png">


# 作ってみよう
まずは、storyboardの設定をします。
全体像としては次のようになります。
<img width="797" alt="preview3.png" src="../../assets/collectionViewSample/preview3.png">

CollectionViewControllerのcellにはLabelを２つ置いています。
<img width="266" alt="preview4.png" src="../../assets/collectionViewSample/preview4.png">

cellに配置されている色のLabelを丸くしたいので、Labelを選択して、次のように設定してください。
<img width="250" alt="preview5.png" src="../../assets/collectionViewSample/preview5.png">

Clip To Boundsにもチェックを入れておいてください。
<img width="250" alt="preview6.png" src="../../assets/collectionViewSample/preview6.png">


そして、一番右のViewControllerの全面にはLabelを設置しています。
<img width="386" alt="preview7.png" src="../../assets/collectionViewSample/preview7.png">

CollectionViewControllerからViewControllerの画面遷移にはSegueを使いましたが、このSegueのIdentifierは"Segue"にしています。
<img width="261" alt="preview8.png" src="../../assets/collectionViewSample/preview8.png">

また、CellのIdentifierを"CollectionViewCell"にしています。
<img width="250" alt="preview9.png" src="../../assets/collectionViewSample/preview9.png">


次にNewFileから、UICollectionViewControllerを継承しているCollectionViewController.swiftというファイルとUICollectionViewCellを継承しているCollectionViewCell.swiftというファイルを作ってください。
<img width="251" alt="preview10.png" src="../../assets/collectionViewSample/preview10.png">

そして、storyboardのCollectionViewControllerとCollectionViewCellにクラスの関連付けをします。
<img width="254" alt="preview11.png" src="../../assets/collectionViewSample/preview11.png">

<img width="250" alt="preview12.png" src="../../assets/collectionViewSample/preview12.png">

CollectionViewCell.swiftのCollectionViewCellというクラスにstoryboardのcellの２つのラベルを関連付けましょう。

```
//// CollectionViewCell.swift
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var name: UILabel!
```

そして、CollectionViewCellのクラス内でrequired init?(coder aDecoder: NSCoder)という関数を作ります。ここでは、cellの枠の色つけと丸くするコードを書きます。
CollectionViewCell.swiftの全体のコードは次のようになります。

```
//// CollectionViewCell.swift
class CollectionViewCell: UICollectionViewCell {
    
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var name: UILabel!
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        
        // cellの枠の太さ
        self.layer.borderWidth = 1.0
        // cellの枠の色
        self.layer.borderColor = UIColor.black.cgColor
        // cellを丸くする
        self.layer.cornerRadius = 8.0
    }
}
```

次はCollectionViewController.swiftにコードを書いていきます。
説明などはコメントアウトに書きました。

```
//// CollectionViewController.swift
class CollectionViewController: UICollectionViewController {
    
    // cellの色の配列
    let colors: [UIColor] = [UIColor.black, UIColor.blue, UIColor.brown, UIColor.cyan, UIColor.darkGray, UIColor.darkText, UIColor.gray, UIColor.green, UIColor.lightGray, UIColor.orange, UIColor.red]
    // cellの色の名前の配列
    let colorNames: [String] = ["black", "blue", "brown", "cyan", "darkGray", "darkText", "gray", "green", "lightGray", "orange", "red"]
    
    // 画面遷移先に渡す色
    var giveColor: UIColor = UIColor.black
    // 画面遷移先に渡す色の名前
    var giveColorName: String = "black"

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    // cellの数を返す関数
    override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return colors.count
    }

    // cellに情報を入れていく関数
    override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        // Identifierが"CollectionViewCell"でCollectionViewCellというクラスのcellを取得
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "CollectionViewCell", for: indexPath) as! CollectionViewCell
        
        // cellのlabelに色付け
        cell.label.backgroundColor = colors[indexPath.item]
        // cellのnameに色の名前を入れる
        cell.name.text = colorNames[indexPath.item]
    
        return cell
    }
    
    // cell選択時に呼ばれる関数
    // 画面遷移先に渡すデータをここで格納する
    override func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        giveColor = colors[indexPath.item]
        giveColorName = colorNames[indexPath.item]
        // Identifierが"Segue"のSegueを使って画面遷移する関数
        performSegue(withIdentifier: "Segue", sender: nil)
    }
    
    // 画面遷移先のViewControllerを取得し、データを渡す
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "Segue" {
            let vc = segue.destination as! ViewController
            vc.receiveColor = giveColor
            vc.receiveColorName = giveColorName
        }
    }
}
```

ViewController.swiftのコードは次のようになります。

```
//// ViewController.swift
class ViewController: UIViewController {

    @IBOutlet weak var backgroundLabel: UILabel!
    
    // CollectionViewControllerから渡される色のデータ
    var receiveColor: UIColor = UIColor.black
    var receiveColorName: String = "black"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // 背景の色を渡された色にする
        backgroundLabel.backgroundColor = receiveColor
        // NavigationItemと呼ばれる一番上のバーに色の名前を入れる
        self.navigationItem.title = receiveColorName
    }
}
```

これで完成になります。

#最後に
このコードは、[github](https://github.com/azuma317/CollectionViewSample)にあげておきます。
