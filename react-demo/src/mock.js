import Mock from "mockjs"
Mock.mock(/\/my.json/,{
    'totalCount|min-max': 10,
    'list|5-10':[{
        'id':'@guid()',
        'label':'@cname',
        }
    ]
})