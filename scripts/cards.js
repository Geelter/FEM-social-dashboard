import data from '../data/data.json' assert { type: 'json' };

const followersSection = document.querySelector('.followers');
const statisticsSection = document.querySelector('.statistics');
let followersSectionInner = '';
let statisticsSectionInner = '';

data.mainData.forEach(item => appendFollowersCard(item));
data.secondaryData.forEach(item => appendStatisticsCard(item));

followersSection.innerHTML += followersSectionInner;
statisticsSection.innerHTML += statisticsSectionInner;

function appendFollowersCard(followersData) {
    const cardMarkup = generateFollowersCard(followersData);
    followersSectionInner += cardMarkup;
}

function appendStatisticsCard(statisticsData) {
    const cardMarkup = generateStatisticsCard(statisticsData);
    statisticsSectionInner += cardMarkup;
}

function generateFollowersCard(followersData) {
    const cardBorder = followersData.platform === 'instagram'
        ? 'instagram-gradient'
        : `${followersData.platform}`;

    const trendIcon = followersData.trendPositive
        ? 'up'
        : 'down';

    const trendColor = followersData.trendPositive
        ? 'green'
        : 'red';

    const markup =
        `<div 
            class="followers__card flow"
            style="--_card-border: var(--clr-${cardBorder})"
        >
            <div class="followers__card-handle">
                <img src="./images/icon-${followersData.platform}.svg" alt="" />
                <h2>${followersData.title}</h2>
            </div>

            <p class="followers__card-total">
                ${followersData.mainValue}<span>Followers</span>
            </p>
            <p class="followers__card-trend text-${trendColor}">
                <img src="./images/icon-${trendIcon}.svg" alt="" />${followersData.trendValue} Today
            </p>
        </div>`

    return markup;
}

function generateStatisticsCard(statisticsData) {
    const trendIcon = statisticsData.trendPositive
        ? 'up'
        : 'down';

    const trendColor = statisticsData.trendPositive
        ? 'green'
        : 'red';

    const markup =
        `<div class="statistics__card flow">
            <div>
                <h2 class="statistics__card-heading">${statisticsData.title}</h2>
                <img
                    class="statistics__card-icon"
                    src="./images/icon-${statisticsData.platform}.svg"
                    alt=""
                />
            </div>

            <div>
                <p class="statistics__card-value">${statisticsData.mainValue}</p>
                <p class="statistics__card-trend text-${trendColor}">
                    <img src="./images/icon-${trendIcon}.svg" alt="" />${statisticsData.trendValue}%
                </p>
            </div>
        </div>`

    return markup;
}