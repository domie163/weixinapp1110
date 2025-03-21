package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ShangpintuihuoDao;
import com.entity.ShangpintuihuoEntity;
import com.service.ShangpintuihuoService;
import com.entity.vo.ShangpintuihuoVO;
import com.entity.view.ShangpintuihuoView;

@Service("shangpintuihuoService")
public class ShangpintuihuoServiceImpl extends ServiceImpl<ShangpintuihuoDao, ShangpintuihuoEntity> implements ShangpintuihuoService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShangpintuihuoEntity> page = this.selectPage(
                new Query<ShangpintuihuoEntity>(params).getPage(),
                new EntityWrapper<ShangpintuihuoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShangpintuihuoEntity> wrapper) {
		  Page<ShangpintuihuoView> page =new Query<ShangpintuihuoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ShangpintuihuoVO> selectListVO(Wrapper<ShangpintuihuoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ShangpintuihuoVO selectVO(Wrapper<ShangpintuihuoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ShangpintuihuoView> selectListView(Wrapper<ShangpintuihuoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShangpintuihuoView selectView(Wrapper<ShangpintuihuoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
