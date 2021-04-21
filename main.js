class SelectSort
{
  static sort(arrays)
  {
    const len = arrays.length - 1;
    let minIndex;


    for (var i = 0; i < len; i++)
    {
      minIndex = i; //選択された最小のインデックス(暫定最小1位)
      let minValue = arrays[minIndex];//(暫定最小1位)
      for (var j = i; j < len; j++)　//探索は最小値がarrays[i]に入れば、その次のarray[i+1]に入るものを探しにいく
      {
        if (minValue > arrays[j + 1]) //より低い値が見つかる続ける限り入れ替え
        {
          minValue = arrays[j + 1];　//最終的に最小値になる
          minIndex = j + 1;　　　　　　//最終的に最小値が入っていたインデックスになる
        }
      }

      // arrays[i](暫定最小1位)はarrays[minIndex](最小1位)と交換されます
      if (i != minIndex)
      {
        const tmp = arrays[i];
        arrays[i] = arrays[minIndex];
        arrays[minIndex] = tmp;
      }
    }
  }
}
