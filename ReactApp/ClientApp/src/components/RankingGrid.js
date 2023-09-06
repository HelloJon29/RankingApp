const RankingGrid = ({ items, imgArr }) => {
  const rankingGrid = [];
  const cellCollectionTop = [];
  const cellCollectionMid = [];
  const cellCollectionBot = [];
  const cellCollectionWorst = [];

  function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
    if (rankNum > 0) {
      let item = items.find((o) => o.ranking === rankNum);
      cellCollection.push(
        <div id={`rank-${rankNum}`} className="rank-cell"></div>
      );
    } else {
      cellCollection.push(
        <div className="label-cell">
          <h4>{rowLabel}</h4>
        </div>
      );
    }
  }

  function createCellsForRow(rowNum) {
    let rankNum = 0;
    let currCollection = [];
    let label = '';
    const numCells = 5;

    for (let i = 1; i < numCells; i++) {
      rankNum = i === 1 ? 0 : numCells * (rowNum - 1) + i - rowNum;

      if (rowNum === 1) {
        currCollection = cellCollectionTop;
        label = 'Top Tier';
      } else if (rowNum === 2) {
        currCollection = cellCollectionMid;
        label = 'Mid Tier';
      } else if (rowNum === 3) {
        currCollection = cellCollectionBot;
        label = 'Bot Tier';
      } else if (rowNum === 4) {
        currCollection = cellCollectionWorst;
        label = 'Worst Tier';
      }
      pushCellMarkupToArr(currCollection, rankNum, label);
    }
  }

  function createCellsForRows() {
    const maxRows = 4;
    for (let row = 1; row <= maxRows; row++) {
      createCellsForRow(row);
    }
  }

  function createRowsForGrid() {
    rankingGrid.push(
      <div className="rank-row top-tier">{cellCollectionTop}</div>
    );
    rankingGrid.push(
      <div className="rank-row mid-tier">{cellCollectionMid}</div>
    );
    rankingGrid.push(
      <div className="rank-row bot-tier">{cellCollectionBot}</div>
    );
    rankingGrid.push(
      <div className="rank-row worst-tier">{cellCollectionWorst}</div>
    );

    return rankingGrid;
  }

  function createRankingGrid() {
    createCellsForRows();
    return createRowsForGrid();
  }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>
    )
};

export default RankingGrid;
