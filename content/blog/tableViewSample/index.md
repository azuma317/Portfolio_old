---
title: TableViewの基礎
date: "2020-08-12T18:00:00.000Z"
description: "TableViewの基礎についての内容です。"
group: "blog"
---

# はじめに
UITableViewのsectionとcellの使い方をまとめました！

# 完成品
<img width="287" alt="preview1.png" src="../../assets/tableViewSample/preview1.png">

<img width="286" alt="preview2.png" src="../../assets/tableViewSample/preview2.png">


# つくってみよう
今回は、UINavigationControllerとUITableViewControllerとUIViewControllerを使いました。

まず、StoryboardでNavigationControllerを持ってきます。
<img width="623" alt="preview3.png" src="../../assets/tableViewSample/preview3.png">

右のTableViewの上にあるRoot View ControllerをTableViewControllerに変えます。
そして、cellの中にLabelを配置します。
<img width="579" alt="preview4.png" src="../../assets/tableViewSample/preview4.png">

そして、Cellを選択して、CellのIdentifierをTableViewCellにします。
<img width="259" alt="preview5.png" src="../../assets/tableViewSample/preview5.png">

次に、StoryboardにViewControllerを持ってきます。
<img width="454" alt="preview6.png" src="../../assets/tableViewSample/preview6.png">

TableViewの上にある黄色いボタンをcontrolボタンを押しながらViewControllerに持っていきます。
<img width="286" alt="preview7.png" src="../../assets/tableViewSample/preview7.png">

すると、こういったものが出るので、Showを押してください。
<img width="173" alt="preview8.png" src="../../assets/tableViewSample/preview8.png">

全体は、下の写真のようになります。
<img width="577" alt="preview9.png" src="../../assets/tableViewSample/preview9.png">

そして、TableViewControllerとViewControllerを繋いているSegueと言うものを押して、IdentifierをSegueにしてください。
<img width="849" alt="preview10.png" src="../../assets/tableViewSample/preview10.png">

これでStroyboardはほぼ完成です。

次に、NewFile...からUITableViewControllerを継承をしているTableViewController.swiftとUITableViewCellを継承しているTableViewCell.swiftとUIViewControllerを継承しているViewController.swiftを作ってください。

Fileを継承させるには、Cocoa Touch ClassのSubclass ofに継承させたいクラスを書きます。
<img width="718" alt="preview11.png" src="../../assets/tableViewSample/preview11.png">

作ったファイルは左側のファイル一覧に並びます。

<img width="214" alt="preview12.png" src="../../assets/tableViewSample/preview12.png">

そして、StoryboardのTableViewControllerとCellとViewControllerにそれぞれのファイルを紐付けます。
<img width="256" alt="preview13.png" src="../../assets/tableViewSample/preview13.png">

そして、CellのLabelをTableViewCell.swiftに紐付けたいので、TableViewCell.swiftとStryboardを開いて、controlを押しながら、ファイルの方に持ってきます。
Labelの名前は、nameにしてあります。

```TableViewCell.swift
    @IBOutlet weak var name: UILabel!
```

そして、StoryboardのViewControllerにもLabelを置きたいので、LabelをViewControllerの真ん中に置きます。
<img width="215" alt="preview14.png" src="../../assets/tableViewSample/preview14.png">

CellのLabelと同じように、StoryboardのViewControllerのLabelをViewControllerにlabelという名前で紐付けます。

```
//// ViewController.swift
    @IBOutlet weak var label: UILabel!
```

ここから、コードを書いていきます。
主に書くのは、TableViewController.swiftです。

```
//// TableViewController.swift
class TableViewController: UITableViewController {
    
    // cellのlabelに書く文字列
    let name1: [String] = ["aaa", "bbb", "ccc"]
    let name2: [String] = ["ddd", "eee", "fff"]
    
    // 遷移先のViewControllerに渡す変数
    var giveData: String = ""

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    // sectionの数を返す関数
    override func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }

    // sectionごとのcellの数を返す関数
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if section == 0 {
            return name1.count
        } else if section == 1 {
            return name2.count
        } else {
            return 0
        }
    }
    
    // sectionの高さを返す関数
    override func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 40
    }
    
    // sectionに載せる文字列を返す関数
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "seciton\(section)"
    }

    // cellの情報を書き込む関数
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath) as! TableViewCell
        
        // ここでcellのlabelに値を入れています。
        if indexPath.section == 0 {
            cell.name.text = name1[indexPath.item]
        } else {
            cell.name.text = name2[indexPath.item]
        }

        return cell
    }
    
    // cellが押されたときに呼ばれる関数
    // 画面遷移の処理もここで書いている
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        // 押されたときのcellのlabelの文字列をViewControllerに渡したいので、一旦、giveDataに入れとく
        if indexPath.section == 0 {
            giveData = name1[indexPath.item]
        } else {
            giveData = name2[indexPath.item]
        }
        // Segueを使った画面遷移を行う関数
        performSegue(withIdentifier: "Segue", sender: nil)
    }
    
    // 遷移先のViewControllerにデータを渡す関数
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "Segue" {
            let vc = segue.destination as! ViewController
            vc.receiveData = giveData
        }
    }

}
```

ViewController.swiftでの処理は、TableViewControllerから渡されたデータをlabelに反映させるだけです。

```
//// ViewController.swift
class ViewController: UIViewController {

    @IBOutlet weak var label: UILabel!
    var receiveData: String = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        label.text = receiveData
    }

}
```

TableViewCell.swiftのほうはなにも書かなくて大丈夫です。

```
//// TableViewCell.swift
class TableViewCell: UITableViewCell {

    @IBOutlet weak var name: UILabel!

}
```


これで完成です。

# 最後に
[github](https://github.com/azuma317/TableViewSample)に載せました。
参考にしてください。
