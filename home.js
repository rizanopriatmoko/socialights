import React from "react";
import { StyleSheet, Text, View, Alert, Image, ScrollView, Dimensions } from 'react-native';
import { Appbar, TextInput, Card, Title, Paragraph, Button } from "react-native-paper";



export default function Home() {
    const theme = {
        colors: {
            primary: 'white'
        }
    }
    const { width } = Dimensions.get('window')
    const height = width * 0.6
    let images = [
        'https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
        'https://images.unsplash.com/photo-1465161191540-aac346fcbaff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    ]

    let channels = [{
        name: 'GadgetIn',
        category: 'Technology',
        image: 'https://yt3.ggpht.com/ytc/AKedOLT5o5W3kpZY3Y7Jgs6Ln-v23v7Ddhv50Fb87waS=s900-c-k-c0x00ffffff-no-rj'
    }, {
        name: 'iTechLife',
        category: 'Technology',
        image: 'https://i.ytimg.com/vi/Y6ap175i3K0/hqdefault.jpg'
    }, {
        name: 'JWestBros',
        category: 'Food & Drink',
        image: 'data:image/jpeg;base64,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'
    }, {
        name: 'Rachel G',
        category: 'Shopping',
        image: 'https://yt3.ggpht.com/ytc/AKedOLRlPWdALaCGEOUfu02CeRflw9szVtcF5OejSdZ3pQ=s900-c-k-c0x00ffffff-no-rj'
    },
    ]

    let ratings = [{
        brand: 'Stojo',
        Stuff: 'The Collapsible Travel Cup',
        image: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgABQQAAAB0APi9IAwAANf0.jpg.dpg.webp'
    }, {
        brand: 'Apple',
        Stuff: 'AirPods Pro Earphone Wireless',
        image: 'https://www.apple.com/v/airpods-pro/c/images/meta/og__ch3csr9zmviq_overview.png?202101180047'
    }, {
        brand: 'Nike',
        Stuff: 'Nike Unveils New Joyride Cus',
        image: 'data:image/jpeg;base64,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'
    }, {
        brand: 'Nike',
        Stuff: 'Nike Air Force 1 Shadow Pastel',
        image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F01%2FNike-Air-Force-1-Shadow-New-Colorway-Fruition-1.jpg?q=75&w=800&cbr=1&fit=max'
    }]

    let journals = [{
        image: 'https://www.justetf.com/images/thumbnails/etf-investment-guide-theme-millennials.jpg',
        title: '6 Tips for Creating an Unboxing Video',
    }, {
        image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: '6 Tips for Creating an Unboxing Video',
    }, {
        image: 'https://images.unsplash.com/photo-1622495505508-03991221aca7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        title: '4 Ways to find favorite product review',
    }, {
        image: 'https://images.unsplash.com/photo-1625774613123-d9ef02f725fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: '4 tips of making decision before purchased',
    }]

    return (
        <ScrollView>
            {/* navbar */}
            <Appbar.Header theme={theme}>
                <Image
                    source={{ uri: 'https://www.socialights.id/img/scl-logo.2bf19f31.png' }}
                    style={{ width: 100, height: 40, paddingEnd: 200, marginVertical: 20 }} />
                <Appbar.Action icon="magnify" style={{ marginLeft: 50 }} />
                <Appbar.Action icon={{ uri: 'https://pics.freeicons.io/uploads/icons/png/5937647761558965372-512.png' }} />
                <Appbar.Action icon='dots-vertical' />
            </Appbar.Header>
            {/* 1st slideshow */}
            <View style={{ marginTop: 30 }}>
                <ScrollView horizontal style={{ width, height }}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={{ width: width * 0.7, height, resizeMode: 'contain', borderRadius: 20, marginHorizontal: 10 }}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            {/* searchbar */}
            <View style={{ marginTop: 20, marginBottom: 40 }}>
                <TextInput
                    placeholder='Search Anything'
                    style={{
                        textAlign: 'center',
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'white',
                        fontSize: 43.5,
                        underlineColor: 'black',
                        fontFamily: 'roboto'
                    }}
                />
            </View>
            {/* socialty sliders */}
            <View style={{
                backgroundColor: '#E5E4E2',
                paddingVertical: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        paddingEnd: 170,
                    }}>Meet Socialty</Text>
                    <Text style={{
                        color: 'red',
                        fontSize: 18
                    }}>
                        Learn
                    </Text>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <ScrollView horizontal style={{ width }}>
                        {
                            channels.map((channel, idx) => (
                                <Card style={{ width: width * 0.6, margin: 10, marginHorizontal: 10 }} key={idx} >
                                    <Card.Cover source={{ uri: `${channel.image}` }} />
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginHorizontal: 10
                                    }}>
                                        <View style={{
                                            marginTop: 15
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                            }}>{channel.name}</Text>
                                            <Text>{channel.category}</Text>
                                        </View>
                                        <Image
                                            source={{ uri: 'https://www.citypng.com/public/uploads/preview/-11596149075nhbwnzspuy.png' }}
                                            style={{
                                                marginTop: 30,
                                                width: 30,
                                                height: 30
                                            }}></Image>
                                        <Image
                                            source={{ uri: 'https://static.thenounproject.com/png/809341-200.png' }}
                                            style={{
                                                marginTop: 30,
                                                width: 30,
                                                height: 30
                                            }}></Image>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginHorizontal: 10,
                                        marginVertical: 15
                                    }}>
                                        <View>
                                            <Title style={{
                                                fontSize: 25,
                                                fontWeight: 'bold'
                                            }}>90%</Title>
                                            <Text style={{ fontSize: 12 }}>Reputation</Text>
                                        </View>
                                        <View>
                                            <Title style={{
                                                fontSize: 25,
                                                fontWeight: 'bold'
                                            }}>70%</Title>
                                            <Text style={{
                                                fontSize: 12
                                            }}>Influence</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginHorizontal: 10,
                                        marginVertical: 15
                                    }}>
                                        <Image
                                            source={{ uri: 'https://www.nicepng.com/png/detail/131-1314271_food-icon-food-court-icon-png.png' }}
                                            style={{
                                                width: 50,
                                                height: 50
                                            }}></Image>
                                        <Image
                                            source={{ uri: 'https://i2.wp.com/rentalmotordimalang.com/wp-content/uploads/2015/12/icon-motor-hijau.png' }}
                                            style={{
                                                width: 50,
                                                height: 50
                                            }}></Image>
                                        <Image
                                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70h5UnDOLuADwD7SIvcJcff02rQnnWgJUpA&usqp=CAU' }}
                                            style={{
                                                width: 50,
                                                height: 50
                                            }}></Image>
                                        <Image
                                            source={{ uri: 'https://pbs.twimg.com/profile_images/482891759563706368/q_2VfqNG_400x400.jpeg' }}
                                            style={{
                                                width: 50,
                                                height: 50
                                            }}></Image>
                                        <Image
                                            source={{ uri: 'https://image.pngaaa.com/13/221013-middle.png' }}
                                            style={{
                                                width: 50,
                                                height: 50
                                            }}></Image>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginHorizontal: 10,
                                        marginVertical: 15
                                    }}>
                                        <View>
                                            <Text style={{ fontSize: 12 }}>Glossy Goddess</Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 12
                                            }}>Lv.999</Text>
                                        </View>
                                    </View>
                                </Card>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            {/* Ratings Slider */}
            <View style={{
                backgroundColor: '#C0C0C0',
                paddingVertical: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        paddingEnd: 210
                    }}>
                        Ratings
                    </Text>
                    <Text style={{
                        color: 'red',
                        fontSize: 18
                    }}>
                        See All
                    </Text>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <ScrollView horizontal style={{ width }}>
                        {
                            ratings.map((rating, idx) => (
                                <View style={{ backgroundColor: 'green', width: width * 0.7, margin: 10, marginHorizontal: 10, borderRadius: 10 }}>
                                    <Card style={{}} key={idx} >
                                        <Card.Cover source={{ uri: `${rating.image}` }} />
                                        <View style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                marginTop: 10
                                            }}>4.8</Text>
                                            <Image
                                                source={{ uri: 'data:image/png;base64,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' }}
                                                style={{
                                                    marginTop: 15,
                                                    marginLeft: 5,
                                                    width: 20,
                                                    height: 20
                                                }}></Image>
                                        </View>
                                        <Text style={{ marginLeft: 10, fontSize: 13 }}>(114k Reviews)</Text>
                                        <Text style={{ marginLeft: 10, fontSize: 14, marginTop: 20 }}>{rating.brand}</Text>
                                        <Text style={{ marginLeft: 10, fontSize: 23, marginBottom: 20, fontWeight: 'bold' }}>{rating.Stuff}</Text>
                                    </Card>
                                    <View style={{ marginHorizontal: 5 }}>
                                        <Text style={{ margin: 10, color: 'white', fontSize: 12 }}>Today, 5:30 pm</Text>
                                        <Text style={{ marginTop: 10, marginHorizontal: 10, color: 'white', fontSize: 19 }}>"HereGoes The Users' Shoutout Message"</Text>
                                        <Text style={{ marginTop: 2, marginBottom: 15, marginHorizontal: 10, color: 'white', fontSize: 11 }}>Shoutout on Rating_Parameter</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                marginLeft: 10
                                            }}>
                                                <Image
                                                    source={{ uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' }}
                                                    style={{
                                                        marginTop: 1,
                                                        width: 28,
                                                        height: 28
                                                    }}></Image>
                                                <Image
                                                    source={{ uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' }}
                                                    style={{
                                                        marginTop: 1,
                                                        width: 28,
                                                        height: 28
                                                    }}></Image>
                                                <Image
                                                    source={{ uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' }}
                                                    style={{
                                                        marginTop: 1,
                                                        width: 28,
                                                        height: 28
                                                    }}></Image>
                                            </View>
                                            <Text style={{ margin: 10, marginBottom: 18, color: 'white', fontSize: 10 }}>User & 10 Others agree</Text>
                                        </View>
                                    </View>

                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

            </View>
            {/* Perks */}
            <View style={{ paddingVertical: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        paddingEnd: 220
                    }}>Perks</Text>
                    <Text style={{
                        color: 'red',
                        fontSize: 18
                    }}>
                        See All
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: 10,
                    marginVertical: 15
                }}>
                    <Image source={{ uri: 'https://media.wired.com/photos/5b64db3717c26f0496f4d62d/125:94/w_1976,h_1486,c_limit/Canon-G7XII-SOURCE-Canon.jpg' }} style={{ height: 200, width: 90, borderRadius: 10 }}></Image>
                    <Image source={{ uri: 'https://assets.awaytravel.com/spree/products/1536/original/Blush_BCO_PDP_002.jpg' }} style={{ height: 200, width: 90, borderRadius: 10 }}></Image>
                    <View>
                        <Image source={{ uri: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/01/traveling.jpg' }} style={{ height: 61, borderRadius: 10, width: 90, marginBottom: 4 }}></Image>
                        <Image source={{ uri: 'https://images.tokopedia.net/img/cache/500-square/product-1/2020/3/6/54625534/54625534_9ca142d4-e295-4117-beca-b4244342311f_767_767.webp' }} style={{ height: 135, borderRadius: 10, width: 90 }}></Image>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1576636372/eg2quescflzn7qu20h1a.jpg' }} style={{ height: 135, borderRadius: 10, width: 90, marginBottom: 4 }}></Image>
                        <Image source={{ uri: 'https://www.scmedia.id/wp-content/uploads/2021/03/cover.-2.jpg' }} style={{ height: 61, borderRadius: 10, width: 90 }}></Image>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                }}>
                    <View>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', paddingEnd: 180 }}>Traveling</Text>
                        <Text style={{ fontSize: 20 }}>Start from SC 999.999.000</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/5937647761558965372-512.png' }}
                        style={{
                            marginTop: 15,
                            marginLeft: 5,
                            width: 30,
                            height: 30
                        }}></Image>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: 10,
                    marginVertical: 15,
                    marginTop: 50
                }}>
                    <Image source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2021/04/21/koleksi-terbaru-gucci-aria-fall-winter-2021-7_43.jpeg?w=600&q=' }} style={{ height: 200, width: 90, borderRadius: 10 }}></Image>
                    <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0487/8188/5596/products/az-t173-051_1_f776bc81-45a5-42a8-9d67-7428391c39a9_2000x.jpg?v=1616766695' }} style={{ height: 200, width: 90, borderRadius: 10 }}></Image>
                    <View>
                        <Image source={{ uri: 'https://cdn-images.farfetch-contents.com/16/32/22/58/16322258_31297996_300.jpg' }} style={{ height: 61, borderRadius: 10, width: 90, marginBottom: 4 }}></Image>
                        <Image source={{ uri: 'https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-passy-bag-monogram-canvas-handbags--M45592_PM2_Front%20view.jpg' }} style={{ height: 135, borderRadius: 10, width: 90 }}></Image>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg' }} style={{ height: 135, borderRadius: 10, width: 90, marginBottom: 4 }}></Image>
                        <Image source={{ uri: 'https://asset.kompas.com/crops/PnF2brZE4G8t18mJ1w2tGUpHyc0=/79x14:847x526/750x500/data/photo/2018/01/24/1896525141.jpg' }} style={{ height: 61, borderRadius: 10, width: 90 }}></Image>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginBottom: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', paddingEnd: 120 }}>Flex Item $$$</Text>
                        <Text style={{ fontSize: 20 }}>Start from SC 999.999.000</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/5937647761558965372-512.png' }}
                        style={{
                            marginTop: 15,
                            marginLeft: 5,
                            width: 30,
                            height: 30
                        }}></Image>
                </View>
            </View>
            {/* Journal */}
            <View style={{ backgroundColor: '#E5E4E2', paddingBottom: 300 }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        paddingEnd: 200
                    }}>Journal</Text>
                    <Text style={{
                        color: 'red',
                        fontSize: 18
                    }}>
                        See All
                    </Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <ScrollView horizontal>
                        {
                            journals.map((journal, index) => (
                                <View key={index} style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        source={{ uri: journal.image }}
                                        style={{
                                            width: width * 0.6,
                                            height: 200,
                                            // resizeMode: 'contain',
                                            borderRadius: 20,
                                            marginHorizontal: 10,
                                            opacity: 0.5,
                                            backgroundColor: 'rgba(0,0,0,1)'
                                        }}
                                    />
                                    <View style={{
                                        position: 'absolute',
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                            textAlign: 'left',
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            marginLeft: 20,
                                            marginTop: 60,
                                            marginBottom: 10
                                        }}>{journal.title}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10,
                                            marginBottom: 10,
                                            marginTop: 10
                                        }}>
                                            <Image
                                                source={{ uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' }}
                                                style={{
                                                    marginTop: 1,
                                                    width: 30,
                                                    height: 30,
                                                    marginLeft: 20
                                                }}></Image>
                                            <View >
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Firda</Text>
                                                <Text style={{ fontSize: 10, color: 'white' }}>from Socialights</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}